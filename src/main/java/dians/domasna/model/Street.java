package dians.domasna.model;

import lombok.Data;

import javax.persistence.*;
import java.nio.file.DirectoryStream;
import java.util.logging.Filter;

@Entity
@Table(name = "planet_osm_line")
public class Street {
    @Id
    @Column(name = "osm_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "highway")
    private String streetType;

    @Column(name = "surface")
    private String surface;

    @Column(name = "way")
    private String osm_way;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStreetType() {
        return streetType;
    }

    public void setStreetType(String streetType) {
        this.streetType = streetType;
    }

    public String getSurface() {
        return surface;
    }

    public void setSurface(String surface) {
        this.surface = surface;
    }
}
