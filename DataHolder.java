package dians.domasna.DataHolder;

import dians.domasna.model.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataHolder {
    public static List<BusStation> busStations = new ArrayList<>();
    public static List<CarRental> carRentals = new ArrayList<>();
    public static List<FuelStation> fuelStations = new ArrayList<>();
    public static List<ParkingSpace> parkingSpaces = new ArrayList<>();
    public static List<PublicTransport> publicTransports = new ArrayList<>();

}
