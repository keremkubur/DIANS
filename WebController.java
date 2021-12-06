package dians.domasna.web;

import dians.domasna.DataHolder.DataHolder;
import dians.domasna.model.*;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class WebController {
    @GetMapping(value = "/busstation", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<BusStation> getBusStations() {
        return DataHolder.busStations;
    }

    @GetMapping(value = "/carrental", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CarRental> getCarRentals() {
        return DataHolder.carRentals;
    }

    @GetMapping(value = "/fuelstations", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<FuelStation> getFuelStations() {
        return DataHolder.fuelStations;
    }

    @GetMapping(value = "/parkingspace", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ParkingSpace> getParkingSpace() {
        return DataHolder.parkingSpaces;
    }

    @GetMapping(value = "/publictransport", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<PublicTransport> getPublicTransport() {
        return DataHolder.publicTransports;
    }
}
