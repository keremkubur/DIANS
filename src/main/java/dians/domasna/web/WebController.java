package dians.domasna.web;

import dians.domasna.DataHolder.DataHolder;
import dians.domasna.Repository.*;
import dians.domasna.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class WebController {
    @Autowired
    private BusStationRepository busStationRepository;

    @GetMapping(value = "/busstation", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<BusStation> getBusStations() {
        return busStationRepository.findAll();
    }

    @Autowired
    private CarRentalRepository carRentalRepository;

    @GetMapping(value = "/carrental", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CarRental> getCarRentals() {
        return carRentalRepository.findAll();
    }

    @Autowired
    private FuelStationRepository fuelStationRepository;

    @GetMapping(value = "/fuelstations", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<FuelStation> getFuelStations() {
        return fuelStationRepository.findAll();
    }

    @Autowired
    private ParkingSpaceRepository parkingSpaceRepository;

    @GetMapping(value = "/parkingspace", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ParkingSpace> getParkingSpace() {
        return parkingSpaceRepository.findAll();
    }

    @Autowired
    private PublicTransportRepository publicTransportRepository;

    @GetMapping(value = "/publictransport", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<PublicTransport> getPublicTransport() {
        return publicTransportRepository.findAll();
    }
}
