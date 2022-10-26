import requests
import json

baseUrl = "https://www.googleapis.com/civicinfo/v2/voterinfo"

params = {
    "electionId": 8000, 
    "key": "AIzaSyCVdgz-mQ4wpNn3-4CNrQ9MQqaKpNEp1rs"
}

# response = requests.get(baseUrl, params=params)
# with open("monroe-nc.json", "w") as outfile:
#     json.dump(response.json(), outfile, indent=2)

# params['address'] = 
# response2 = requests.get(baseUrl, params=params)
# with open("charlotte-nc.json", "w") as outfile:
#     json.dump(response2.json(), outfile, indent=2)


# params['address'] = 
# response3 = requests.get(baseUrl, params=params)
# with open("raleigh-nc.json", "w") as outfile:
#     json.dump(response3.json(), outfile, indent=2)

def write_api_data(address, filename):
    params['address'] = address
    response = requests.get(baseUrl, params)
    with open(f"assets/api-data/{filename}", "w") as outfile:
        json.dump(response.json(), outfile, indent=2)

# write_api_data("600 East 4th Street Charlotte, NC 28202", "charlotte-nc.json")
# write_api_data("5019 Lonnie D Aldridge Rd, Monroe, NC 28112", "monroe-nc.json")
# write_api_data("601 North St, Raleigh, NC", "raleigh-nc.json")
write_api_data("780 HENDERSONVILLE RD STE 7, ASHEVILLE,", "asheville-nc.json")

    

