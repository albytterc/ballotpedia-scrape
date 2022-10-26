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

# def get_state(address):
#     parts = address.split()
#     if parts[-1].isalpha():
#         return parts[-1].lower()
#     elif parts[-2].isalpha():
#         return parts[-2].lower()


def write_api_data(address, filename):
    params['address'] = address
    response = requests.get(baseUrl, params)
    response = response.json()
    state = response['normalizedInput']['state'].lower()
    with open(f"assets/api-data/{state}/{filename}", "w") as outfile:
        json.dump(response, outfile, indent=2)

# write_api_data("600 East 4th Street Charlotte, NC 28202", "charlotte-nc.json")
# write_api_data("5019 Lonnie D Aldridge Rd, Monroe, NC 28112", "monroe-nc.json")
# write_api_data("601 North St, Raleigh, NC", "raleigh-nc.json")
if __name__ == '__main__':
    address = input("Enter address: ")
    filename = input("Enter file name: ")
    write_api_data(address, filename)

    

