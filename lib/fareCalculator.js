const BASE_KM = 130;

const FIXED_FARES = {
  Sedan: 2350,
  Etios: 2480,
  SUV: 3000,
  Innova: 3000,
  Crysta: 3390,
};

const vehicleKey =
  vehicleType?.toLowerCase().includes('etios')
    ? 'Etios'
    : vehicleType?.toLowerCase().includes('crysta')
    ? 'Crysta'
    : vehicleType?.toLowerCase().includes('innova')
    ? 'Innova'
    : vehicleType?.toLowerCase().includes('suv')
    ? 'SUV'
    : 'Sedan';

let distanceCharge;
let totalAmount;
let ratePerKm = vehicle.perKm;
let driverAllowanceAmount = vehicle.driverAllowance;

if (tripType === 'oneway') {
  const baseFare =
    FIXED_FARES[vehicleKey] || FIXED_FARES.Sedan;

  if (billableKm <= BASE_KM) {
    totalAmount = baseFare;
    distanceCharge = baseFare;
  } else {
    const extraKm = billableKm - BASE_KM;

    totalAmount =
      baseFare + extraKm * vehicle.perKm;

    distanceCharge = totalAmount;
  }
} else {
  distanceCharge = billableKm * vehicle.perKm;
  totalAmount =
    distanceCharge + vehicle.driverAllowance;
}