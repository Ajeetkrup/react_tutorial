import React from "react";
import ReactDOM from "react-dom/client";
import image from "./assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={image} altname="Logo-food-delivery" />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    props.restaurant.info;

  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        altname={cloudinaryImageId}
      />
      <h3 className="food-name">{name}</h3>
      <h4 className="res-card-utils">
        {avgRating} Stars | {sla.slaString}
      </h4>
      <h4>{costForTwo}</h4>
      <h4 className="cuisines">{cuisines.join(",")}</h4>
    </div>
  );
};

const resList = {
  restaurants: [
    {
      info: {
        id: "779700",
        name: "Bakingo",
        cloudinaryImageId: "0c53fd8f62e3d25ba56d1b4cfe572cef",
        locality: "Patel Nagar",
        areaName: "DRB- BhattaCharya Road",
        costForTwo: "₹299 for two",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        avgRating: 4.7,
        parentId: "3818",
        avgRatingString: "4.7",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 47,
          lastMileTravel: 7.6,
          serviceability: "SERVICEABLE",
          slaString: "47 mins",
          lastMileTravelString: "7.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-02 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/bakingo-patel-nagar-drb-bhattacharya-road-patna-779700",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "544283",
        name: "Sinful Desserts",
        cloudinaryImageId: "gh8wj4oqh4rd9wgwbsd7",
        locality: "Sheikhpura",
        areaName: "Khajpura",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery"],
        avgRating: 4.4,
        veg: true,
        parentId: "11311",
        avgRatingString: "4.4",
        totalRatingsString: "9",
        sla: {
          deliveryTime: 52,
          lastMileTravel: 7.2,
          serviceability: "SERVICEABLE",
          slaString: "52 mins",
          lastMileTravelString: "7.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/sinful-desserts-sheikhpura-khajpura-patna-544283",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "767231",
        name: "FNP Cakes By Ferns N Petals",
        cloudinaryImageId: "57f39df3b1e192cb54999ffbbdf40bf8",
        locality: "Lohiya Nagar",
        areaName: "Kankarbagh",
        costForTwo: "₹499 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.1,
        veg: true,
        parentId: "339638",
        avgRatingString: "4.1",
        totalRatingsString: "2",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "43 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 21:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹125",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/fnp-cakes-by-ferns-n-petals-lohiya-nagar-kankarbagh-patna-767231",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "653417",
        name: "Loafer's Cafe",
        cloudinaryImageId: "e919750818afb219a4311fbf463b90de",
        locality: "Budh Marg",
        areaName: "Lodipur",
        costForTwo: "₹700 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Bakery",
          "Beverages",
          "Continental",
        ],
        avgRating: 4.3,
        parentId: "18644",
        avgRatingString: "4.3",
        totalRatingsString: "50+",
        sla: {
          deliveryTime: 51,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "51 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/loafers-cafe-budh-marg-lodipur-patna-653417",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "126152",
        name: "Sweet Home Confectioners",
        cloudinaryImageId: "vvtkaqofotgakpcgf53x",
        locality: "Frazer road",
        areaName: "Fraser Road",
        costForTwo: "₹150 for two",
        cuisines: ["Desserts", "Snacks", "Bakery"],
        avgRating: 4.4,
        parentId: "199276",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "38 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 21:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/sweet-home-confectioners-frazer-road-fraser-road-patna-126152",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "696368",
        name: "Sweet Dreams Bakery",
        cloudinaryImageId: "8d5c9f97e2dfaa288ab81ce2e8e28bcc",
        locality: "Rk Bhattacharya Rd",
        areaName: "Fraser Road",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.3,
        veg: true,
        parentId: "199258",
        avgRatingString: "4.3",
        totalRatingsString: "9",
        sla: {
          deliveryTime: 40,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "40 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 23:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/sweet-dreams-bakery-rk-bhattacharya-rd-fraser-road-patna-696368",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "807001",
        name: "Bonkers Cakery",
        cloudinaryImageId: "b690c8a0f19cf42599beb2bfc8421965",
        locality: "Srikrishnapuri",
        areaName: "Srikrishnapuri",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery"],
        parentId: "451475",
        avgRatingString: "NEW",
        sla: {
          deliveryTime: 47,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "47 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-01 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/bonkers-cakery-srikrishnapuri-patna-807001",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "253169",
        name: "Bikaner Sweets and Pastry Shop",
        cloudinaryImageId: "gd1wohldbsmjuv5mstp7",
        locality: "Ghrounda",
        areaName: "Kankarbagh",
        costForTwo: "₹449 for two",
        cuisines: ["Bakery", "Sweets"],
        avgRating: 4.4,
        veg: true,
        parentId: "45906",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 45,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE_WITH_BANNER",
          slaString: "45 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextOpenTimeMessage: "Currently not taking orders for this location",
          nextCloseTime: "2024-01-01 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹499",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/bikaner-sweets-and-pastry-shop-ghrounda-kankarbagh-patna-253169",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "569760",
        name: "Cakesalley",
        cloudinaryImageId: "9379256f2f715d6447cd65ae5a502f4e",
        locality: "Tilak Marg",
        areaName: "Anandpuri",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Cakes and Pastries"],
        avgRating: 4.3,
        veg: true,
        parentId: "342058",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 6.2,
          serviceability: "SERVICEABLE_WITH_BANNER",
          slaString: "36 mins",
          lastMileTravelString: "6.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextOpenTimeMessage: "Currently not taking orders for this location",
          nextCloseTime: "2024-01-02 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/cakesalley-tilak-marg-anandpuri-patna-569760",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "536462",
        name: "7th Heaven",
        cloudinaryImageId: "urbwulzgxtmqhfbyvurw",
        locality: "Kankarbagh",
        areaName: "Kankarbagh",
        costForTwo: "₹400 for two",
        cuisines: ["Bakery"],
        avgRating: 4.2,
        veg: true,
        parentId: "19",
        avgRatingString: "4.2",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 37,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE_WITH_BANNER",
          slaString: "37 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextOpenTimeMessage: "Currently not taking orders for this location",
          nextCloseTime: "2024-01-01 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/7th-heaven-kankarbagh-patna-536462",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "763914",
        name: "Garden Bakery",
        cloudinaryImageId: "e311b91cddc5830fa58777f967c62389",
        locality: "Gandhi Maidan",
        areaName: "Srikrishnapuri",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery", "Indian", "Snacks"],
        avgRating: 4.4,
        veg: true,
        parentId: "86336",
        avgRatingString: "4.4",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE_WITH_BANNER",
          slaString: "43 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextOpenTimeMessage: "Currently not taking orders for this location",
          nextCloseTime: "2024-01-01 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/garden-bakery-gandhi-maidan-srikrishnapuri-patna-763914",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "439403",
        name: "Waffcha",
        cloudinaryImageId: "5dd41ea126046ba097106437439d3f7e",
        locality: "People'S Community Hall",
        areaName: "Kankarbagh",
        costForTwo: "₹300 for two",
        cuisines: ["Waffle", "Beverages", "Ice Cream", "Desserts", "Bakery"],
        avgRating: 4.3,
        veg: true,
        parentId: "265933",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 45,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE_WITH_BANNER",
          slaString: "45 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextOpenTimeMessage: "Currently not taking orders for this location",
          nextCloseTime: "2024-01-02 02:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-35b7e5b2-5f82-471b-8ae7-7fed199c3478",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/waffcha-peoples-community-hall-kankarbagh-patna-439403",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
  ],
};

const Body = () => {
  const { restaurants } = resList;

  return (
    <div className="res-body">
      <div className="search">search</div>
      <div className="res-card-container">
        {restaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<App />);
