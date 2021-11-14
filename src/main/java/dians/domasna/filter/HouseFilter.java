package dians.domasna.filter;

import dians.domasna.model.House;

import java.util.Objects;
import java.util.Optional;
import java.util.function.Predicate;

public class HouseFilter {
    private static final Predicate<House> HouseNotNull = Objects::nonNull;
    private static final Predicate<House> HouseNoName = house -> house.getName() != null;
    private static final Predicate<House> HouseNoAddress = house -> house.getAddress() != null;

    static House filterHouse(House t) {
        if (HouseNotNull.test(t))
            if (HouseNoName.test(t))
                if (HouseNoAddress.test(t))
                    return t;
        return null;
    }
}
