# -*- coding: utf-8 -*-

import zmq
import time
import redis
import sys
import os

reload(sys)
sys.path.append('../../')
from global_config import ZMQ_CTRL_HOST_FLOW1, ZMQ_CTRL_VENT_PORT_FLOW1, BIN_FILE_PATH


def delete_files():
    localtime = int(time.time())
    print "time to delete files ..."
    count = 0
    file_list = os.listdir(BIN_FILE_PATH)
    for each in file_list:
        file_name = each.split('.')[0]
        file_timestamp = int(file_name.split('_')[0])
        if file_timestamp < localtime:
            os.remove(os.path.join(BIN_FILE_PATH, each))
            count += 1
    print 'we delete %s file at the time %s' %(count, localtime)


if __name__ == "__main__":

    context = zmq.Context()

    controller = context.socket(zmq.PUB)
    controller.bind("tcp://%s:%s" %(ZMQ_CTRL_HOST_FLOW1, ZMQ_CTRL_VENT_PORT_FLOW1))
 
    for i in range(5):
        time.sleep(0.1)
        controller.send("PAUSE")
        # repeat to send to ensure 

    delete_files()
  

