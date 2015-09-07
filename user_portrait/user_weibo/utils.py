#-*- coding:utf-8 -*-
import os
import sys
import json
import time
import leveldb
#from user_portrait.time_utils import ts2datetime, datetime2ts
#from user_portrait.global_config import DEFAULT_LEVELDBPATH
reload(sys)
sys.path.append('../')
from time_utils import ts2datetime, datetime2ts
from global_config import DEFAULT_LEVELDBPATH


# get user weibo from leveldb
def get_user_weibo(uid):
    result = []
    #use to test
    datestr = '2013-09-02'
    end_ts = datetime2ts(datestr)
    #real way to get datestr and ts_segment
    '''
    now_ts = time.time()
    now_date = ts2datetime(now_ts)
    now_date_ts = datetime2ts(now_date)
    ts_segment = (int((now_ts - now_date_ts) / 3600)) % 24
    end_ts = now_date_ts + ts_segment * 3600
    '''
    file_list = set(os.listdir(DEFAULT_LEVELDBPATH))
    for i in range(24*7, 0, -1):
        ts = end_ts - i * 3600
        datestr = ts2datetime(ts)
        ts_segment = (int((ts - datetime2ts(datestr)) / 3600)) % 24 + 1
        leveldb_folder = datestr + str(ts_segment)
        
        if leveldb_folder in file_list:
            leveldb_bucket = dynamic_leveldb(leveldb_folder)
            try:
                user_weibo = leveldb_bucket.Get(uid)
                weibo_list = json.loads(user_weibo)
                result.extend(weibo_list)
            except:
                pass
            

    return result

# dynamic get leveldb by now ts
def dynamic_leveldb(leveldb_folder):
    leveldb_bucket = leveldb.LevelDB(os.path.join(DEFAULT_LEVELDBPATH+'/', leveldb_folder), block_cache_size=8*(2 << 25), write_buffer_size=8*(2 << 25))
    return leveldb_bucket


if __name__=='__main__':
    uid = '2816287692'
    result = get_user_weibo(uid)
    print 'result:', len(result)