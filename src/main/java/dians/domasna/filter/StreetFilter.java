package dians.domasna.filter;

import dians.domasna.model.House;
import dians.domasna.model.Street;

import java.util.Objects;
import java.util.function.Predicate;

public class StreetFilter {
    private static final Predicate<Street> StreetNotNull = Objects::nonNull;
    private static final Predicate<Street> StreetNoName = street -> street.getName() != null;
    private static final Predicate<Street> StreetNoStreetType = street -> street.getStreetType() != null;
    private static final Predicate<Street> StreetNoSurface = street -> street.getSurface() != null;

    static Street filterStreet(Street t) {
        if (StreetNotNull.test(t))
            if (StreetNoName.test(t))
                if (StreetNoStreetType.test(t))
                    return t;
        return null;
    }
}
