import React from "react";
import ProfileInput from "../../components/ProfileInput";
import DashboardHeader from "./DashboardHeader";
import { useState } from "react";
import { Checkbox, Select, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const CreateListing = () => {
  const [propertyTitle, setPropertyTitle] = useState();
  const [description, setDescription] = useState();
  const [propertyType, setPropertyType] = useState();
  const [status, setStatus] = useState();
  const [rooms, setRooms] = useState();
  const [price, setPrice] = useState();
  const [area, setArea] = useState();

  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [googleMapStreetView, setGoogleMapStreetView] = useState("");

  const [propertyId, setPropertyId] = useState("");
  const [areaSize, setAreaSize] = useState("");
  const [sizePrefix, setSizePrefix] = useState("");
  const [landArea, setLandArea] = useState("");
  const [landAreaSizePostfix, setLandAreaSizePostfix] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [garages, setGarages] = useState("");
  const [garageSize, setGarageSize] = useState("");
  const [yearBuild, setYearBuild] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [virtualTourUrl, setVirtualTourUrl] = useState("");
  const [amenities, setAmenities] = useState("");

  const plainOptions = [
    "Air Conditionning",
    "Barbeque",
    "Dryer",
    "Gym",
    "Laundry",
    "Microwave",
    "Outdoor Shower",
    "Refrigerator",
    "Sauna",
    "Lawn",
    "TV Cable",
    "Washer",
    "Wifi",
    "Window Coverings",
    "Swimming Pool",
  ];

  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="p-10 bg-dark2/10">
      <DashboardHeader
        title={"Add New Property"}
        description={"We are glad to see you again!"}
      />
      <div className="mt-5">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold">Create Listing</h1>
          <ProfileInput
            label="Property Title"
            value={propertyTitle}
            onChange={(e) => setPropertyTitle(e.target.value)}
          />
          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="aboutMe"
            >
              Description
            </label>
            <textarea
              id="aboutMe"
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="md:flex gap-5">
            <div className="w-full">
              <h1 className="block text-gray-700 text-sm font-bold mb-2">
                Type
              </h1>
              <Select
                defaultValue="lucy"
                onChange={(value) => setPropertyType(value)}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
                size="large"
                className="w-full"
              />
            </div>
            <div className="w-full">
              <h1 className="block text-gray-700 text-sm font-bold mb-2">
                Status
              </h1>
              <Select
                size="large"
                defaultValue={"lucy"}
                onChange={(value) => setStatus(value)}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
                className="w-full"
              />
            </div>
          </div>

          <div className="md:grid grid-cols-3 gap-5 mt-5">
            <ProfileInput
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <ProfileInput
              label="Area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            <div>
              <h1 className="block text-gray-700 text-sm font-bold mb-2">
                Rooms
              </h1>
              <Select
                defaultValue="1"
                onChange={(value) => setRooms(value)}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                  { value: "others", label: "Others" },
                ]}
                size="large"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="p-10 bg-white mt-5 rounded-lg">
          <h1 className="font-semibold mb-5 text-xl">Location</h1>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            <ProfileInput
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <ProfileInput
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <ProfileInput
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <ProfileInput
              label="Neighborhood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
            <ProfileInput
              label="Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <ProfileInput
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <ProfileInput
              label="Google Map Street View"
              value={googleMapStreetView}
              onChange={(e) => setGoogleMapStreetView(e.target.value)}
            />
          </div>
        </div>

        <div className="p-10 bg-white mt-5 rounded-lg">
          <h1 className="font-semibold mb-5 text-xl">Detailed Information</h1>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <ProfileInput
              label="Property ID"
              value={propertyId}
              onChange={(e) => setPropertyId(e.target.value)}
            />
            <ProfileInput
              label="Area Size"
              value={areaSize}
              onChange={(e) => setAreaSize(e.target.value)}
            />
            <ProfileInput
              label="Size Prefix"
              value={sizePrefix}
              onChange={(e) => setSizePrefix(e.target.value)}
            />
            <ProfileInput
              label="Land Area"
              value={landArea}
              onChange={(e) => setLandArea(e.target.value)}
            />
            <ProfileInput
              label="Land Area Size Postfix"
              value={landAreaSizePostfix}
              onChange={(e) => setLandAreaSizePostfix(e.target.value)}
            />
            <ProfileInput
              label="Bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
            <ProfileInput
              label="Bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
            />
            <ProfileInput
              label="Garages"
              value={garages}
              onChange={(e) => setGarages(e.target.value)}
            />
            <ProfileInput
              label="Garage Size"
              value={garageSize}
              onChange={(e) => setGarageSize(e.target.value)}
            />
            <ProfileInput
              label="Year Build"
              value={yearBuild}
              onChange={(e) => setYearBuild(e.target.value)}
            />
            <ProfileInput
              label="Video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <ProfileInput
              label="360 Degree Virtual Tour"
              value={virtualTourUrl}
              onChange={(e) => setVirtualTourUrl(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <h1 className="block text-gray-700 font-bold mb-2">Amenities</h1>
            <Checkbox.Group
              className="md:grid grid-cols-4 gap-5"
              options={plainOptions}
              onChange={(value) => setAmenities(value)}
            />
          </div>
        </div>
        <div className="p-10 bg-white mt-5 rounded-lg">
          <h1 className="font-semibold mb-5 text-xl">Detailed Information</h1>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Drag and Drop Images here</p>
            </Dragger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
