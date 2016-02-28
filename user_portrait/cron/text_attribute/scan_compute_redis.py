# -*- coding: UTF-8 -*-
import sys
import time
import json
from weibo_api_v2 import read_flow_text, read_flow_text_sentiment
from cron_text_attribute import test_cron_text_attribute_v2
reload(sys)
sys.path.append('../../')
from global_utils import R_RECOMMENTATION as r
from parameter import WEIBO_API_INPUT_TYPE

def scan_compute_redis():
    hash_name = 'compute'
    results = r.hgetall('compute')
    iter_user_list = []
    mapping_dict = dict()
    #test
    #results = {'2098261223':json.dumps(['2013-09-06', '1']), '2991483613':json.dumps(['2013-09-06', '1'])}
    for uid in results:
        user_list = json.loads(results[uid])
        in_date = user_list[0]
        status = user_list[1]
        if status == '1':
            iter_user_list.append(uid)
            mapping_dict[uid] = json.dumps([in_date, '3']) # mark status:3 computing
        if len(iter_user_list) % 100 == 0 and len(iter_user_list) != 0:
            print 'iter_user_list:', iter_user_list
            r.hmset('compute', mapping_dict)
            #acquire bulk user weibo data
            print 'get weibo_api_v2'
            if WEIBO_API_INPUT_TYPE == 0:
                user_keywords_dict, user_weibo_dict, online_pattern_dict = read_flow_text_sentiment(iter_user_list)
            else:
                user_keywords_dict, user_weibo_dict, online_pattern_dict = read_flow_text(iter_user_list)
            #compute text attribute
            print 'compute test_cron_text_attribtue_v2'
            compute_status = test_cron_text_attribute_v2(user_keywords_dict, user_weibo_dict, online_pattern_dict)
            
            if compute_status==True:
                change_status_computed(mapping_dict)
            else:
                change_status_compute_fail(mapping_dict)
            
            iter_user_list = []
            mapping_dict = {}
            
    if iter_user_list != [] and mapping_dict != {}:
        r.mset('compute', mapping_dict)
        #acquire bulk user weibo date
        if WEIBO_API_INPUT_TYPE == 0:
            user_keywords_dict, user_weibo_dict = read_flow_text_sentiment(iter_user_list)
        else:
            user_keywords_dict, user_weibo_dict = read_flow_text(iter_user_list)
        #compute text attribute
        compute_status = test_cron_text_attribute(user_keywords_dict, user_weibo_dict)
        if compute_status==True:
            change_status_computed(mapping_dict)
        else:
            change_status_compute_fail(mapping_dict)


def change_status_computed(mapping_dict):
    hash_name = 'compute'
    status = 4
    new_mapping_dict = {}
    for uid in mapping_dict:
        user_list = mapping_dict[uid]
        user_list[1] = '4'
        new_mapping_dict[uid] = json.dumps(user_list)
    r.hmset(hash_name, new_mapping_dict)

#use to deal compute fail situation
def change_status_compute_fail(mapping_dict):
    hash_name = 'compute'
    status = 1
    new_mapping_dict = {}
    for uid in mapping_dict:
        user_list = mapping_dict[uid]
        user_list[1] = '1'
        new_mapping_dict[uid] = json.dumps(user_list)
    r.mset(hashname, new_mapping_dict)


if __name__=='__main__':
    scan_compute_redis()
