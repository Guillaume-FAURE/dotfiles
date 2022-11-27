import socket as sk
import time

sumTime=0
minTime=10
maxTime=0
numberMessage=1
UDP_IP = "130.243.124.183"
UDP_PORT = 12345
MESSAGE = "Hello, World!"

for i in range(2000):
    MESSAGE+=f"Hello, World n{i}"


#print("UDP target IP:", UDP_IP)
#print("UDP target port:", UDP_PORT)
#print("message:", MESSAGE)

sock = sk.socket(sk.AF_INET, sk.SOCK_DGRAM) # UDP
    

for i in range (50):
    start_time = time.time()
    sock.sendto(bytes(MESSAGE, "utf-8"), (UDP_IP, UDP_PORT))
    data, addr = sock.recvfrom(65536)
    print(f"{numberMessage} received message from:", addr)
    currentTime=float("{:.4f}".format(time.time()-start_time))
    if (currentTime<minTime):
        minTime=currentTime
    if (currentTime>maxTime):
        maxTime=currentTime
    sumTime+=currentTime
    averageTime=time.time()-start_timesumTime/numberMessage
    numberMessage+=1
    
print(f"{numberMessage} : minTime : {minTime} maxTime : {maxTime} averageTime: {averageTime}")
