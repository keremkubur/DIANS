package dians.domasna.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Table(name = "bus_station")
@Getter
@Setter
public class BusStation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column(name = "longitude", nullable = false)
    private Double Long;
    @Column(name = "latitude", nullable = false)
    private Double Lat;
    @Column(name = "name")
    private String name;

    public BusStation(java.lang.Long id, Double aLong, Double lat) {
        this.Id = id;
        this.Long = aLong;
        this.Lat = lat;
    }

    public BusStation() {

    }

}
