## 1. Run
`sudo apt install git-core python-serial python-enum lighttpd`


## 2. Copy these files to /home/pi
- `aqi.py`
- `config.py`
- `google-secret.json`


## 3. If you're adding a new device, update these lines in aqi.py
> NOTE: the Google doc will add data from this device to the tab # that matches the device ID. Example: AQI2 data will go to the 2nd tab

*line 36: update device ID*


## 4. Run each of the below
- `chmod +x aqi.py`
- `pip install pygithub`
- `pip install gspread`
- `pip install oauth2client`


## 5. Edit the crontab
`crontab -e`
```
# Run on start up once
@reboot cd /home/pi/ && ./aqi.py
# Run on start up every 10min
*/10 * * * * cd /home/pi/ && ./aqi.py > /tmp/log.log 2>&1
```


## 6. Create empty .json file on ram disk
`sudo nano /etc/fstab`

### 5a. Add the below text:
`tmpfs /tmp tmpfs defaults,noatime,nosuid,size=4m 0 0`


## 7. Reboot
