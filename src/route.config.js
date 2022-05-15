import Home from "@pages/Home";
import routeConstants from "@utils/routeConstants";

export const routeConfig = {
    home: {
        component: Home,
        ...routeConstants.home
    }
}