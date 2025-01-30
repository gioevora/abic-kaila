export const getAuthHeaders = (
  isJsonRequest = false,
): Record<string, string> => {
  const id = "01JGWH459K5PCTSCSBFN3EC0SS";

  if (!id) {
    console.warn("No token available for authorization.");

    return {};
  }

  const headers: Record<string, string> = {
    "User-ID": id,
  };

  if (isJsonRequest) {
    headers["Content-Type"] = "application/json";
  }

  return headers;
};
