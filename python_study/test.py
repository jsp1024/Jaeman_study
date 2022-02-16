import pycurl

file_name = 'fb.ico'
file_src = 'https://www.facebook.com/favicon.ico'

with open(file_name, 'wb') as f:
    cl = pycurl.Curl()
    cl.setopt(cl.URL, file_src)
    cl.setopt(cl.WRITEDATA, f)
    cl.perform()
    cl.close()