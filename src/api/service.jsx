import serviceData from "../data/data.json";

export const getServiceData = async () => {
  if (serviceData?.serviceData?.length > 0) {
    return Promise.resolve(serviceData.serviceData); 
  }

  try {
    const response = await fetch("/data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch service data");
    }
    const data = await response.json();
    return data?.serviceData || [];
  } catch (error) {
    console.error("Error fetching service data:", error);
    return [];
  }
};
