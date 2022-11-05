# Getting Started

## Available Scripts

In the project directory, run:

### `npm install`

This will install the server dependencies

### `node index.js`

This will start the backend sever and connect to the mysql databse

## Available API calls

Port 3100 is used and can be modified by changing `PORT` variable in .env file.

### http://localhost:3100/raw/:sensor/:data

This will return raw samples collected by the brushbots including values, timestamps, bot index and locations

#### request parameters format

sensor: raw sensor data table name
data: sensor data field name

### http://localhost:3100/grid_map/:grid_map/:timestamp

This will return estimated values on a 2D grid map with values

#### request parameters format

grid_map: sensor value grid map table name
timestamp: SQL datetime

### Returned objects structure
{\
    "code": 0,\
    "message": "Successful",\
    "result": []\
}\
Code 0 and message "Successful" indicates response sent back successfully.\
Code 1 and message "Error" indicates request not able to be processed.\
Result contains the sensor data.

Find out more information on the format of the request parameters in Databse section down below.

#### Examples: 

http://localhost:3100/raw/light_sensor/lLux


## Database

Find database initialization script in dbInit.sql

### Tables
#### air_quality_sensor
id: unique key\
tvoc: Total Volatile Organic Compounds\
eco2: CO2\
timestamp: datetime data recorded\
botIndex: brush bot associated index \
latitude\
longtitude

#### light_sensor
id: unique key\
lFull: Total Light\
lVis: Visible Light\
lIR: Infrared Light\
lLux: Luminous Light\
timestamp: datetime data recorded\
botIndex: brush bot associated index \
latitude\
longtitude

#### power_sensor
id: unique key\
pb: Power from the Battery\
vb: Voltage of the Battery\
ib: Current from the Battery\
pc: Power from the Circuit\
vc: Voltage of the Circuit\
ic: Current from the Circuit\
timestamp: datetime data recorded\
botIndex: brush bot associated index \
latitude\
longtitude

#### soil_sensor
id: unique key\
mSoil: Soil Moisture\
tSoil: Soil Temperature\
timestamp: datetime data recorded\
botIndex: brush bot associated index \
latitude\
longtitude

#### temp_hmd_pres_alt_sensor
id: unique key\
t: Air Temperature\
p: Air Pressure\
a: Altitude\
h: Air Humidity\
timestamp: datetime data recorded\
botIndex: brush bot associated index \
latitude\
longtitude

#### air_temperature_grid_map
id: unique key\
value: Air Temperature\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### air_humidity_grid_map
id: unique key\
value: Air Humidity\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### air_pressure_grid_map
id: unique key\
value: Air Pressure\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### Altitude_grid_map
id: unique key\
value: Altitude\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### eco2_grid_map
id: unique key\
value: CO2 concentration\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### tvoc_grid_map
id: unique key\
value: Total Volatile Organic Compounds\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### lFull_grid_map
id: unique key\
value: Total Light\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### lVis_grid_map
id: unique key\
value: Visible Light\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### lIR_grid_map
id: unique key\
value: Infrared Light\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### lLux_grid_map
id: unique key\
value: Luminous Light\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### mSoil_grid_map
id: unique key\
value: Soil Moisture\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

#### tSoil_grid_map
id: unique key\
value: Soil Temperature\
index_x: row index of grid\
index_y: colume index of grid\
timestamp: datetime data recorded

### Data fields
botIndex: integer\
latitude: scale of 5\
longitude: scale of 5\
tvoc: integer\
eco2: integer\
lFull:integer\
lVis: integer\
lIR: integer\
lLux: integer\
pb: integer\
vb: scale of 2\
ib: scale of 2\
pc: integer\
vc: scale of 2\
ic: scale of 2\
mSoil: integer\
tSoil: integer\
t: scale of 1\
p: integer\
a: integer\
h: scale of 2

### Configuration

Please change default database settings in the .env file.