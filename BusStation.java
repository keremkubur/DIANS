package dians.domasna.model;

public class BusStation {
    private Long Id;
    private Double Long;
    private Double Lat;
    private String name;

    public BusStation(java.lang.Long id, Double aLong, Double lat) {
        this.Id = id;
        this.Long = aLong;
        this.Lat = lat;
    }

    public java.lang.Long getId() {
        return Id;
    }

    public void setId(java.lang.Long id) {
        Id = id;
    }

    public Double getLong() {
        return Long;
    }

    public void setLong(Double aLong) {
        Long = aLong;
    }

    public Double getLat() {
        return Lat;
    }

    public void setLat(Double lat) {
        Lat = lat;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
