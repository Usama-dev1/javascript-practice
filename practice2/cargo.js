function normalizeUnits(manifest) {
  let newObj = {};
  if (manifest.unit === "lb") {
    return {
      ...manifest,
      weight: manifest.weight * 0.45,
      unit: "kg",
    };
  } else if (manifest.unit === "kg") {
    return { ...manifest };
  }
}

//validate the id Container
function validateId(manifest, checkObj) {
  if (!Object.hasOwn(manifest, "containerId")) {
    checkObj.containerId = "Missing";
    return true;
  } else {
    const id = manifest.containerId;
    if (!Number.isInteger(id) || id <= 0) {
      checkObj.containerId = "Invalid";
      return true;
    }
    return false;
  }
}

//validate the id destination
function validateDest(manifest, checkObj) {
  if (!Object.hasOwn(manifest, "destination")) {
    checkObj.destination = "Missing";
    return true;
  } else {
    const str = manifest.destination;
    if (typeof str !== "string" || str.trim() === "") {
      checkObj.destination = "Invalid";
      return true;
    }
    return false;
  }
}

function validateManifest(manifest) {
  let resultObj = {};
  let error = false;
  if (validateId(manifest, resultObj)) error = true;
  if (validateDest(manifest, resultObj)) error = true;

  return error ? resultObj : {};
}
