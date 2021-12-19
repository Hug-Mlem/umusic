import React from "react";

import async from "../components/Async";
import {
    Users,
} from "react-feather";

// Auth components
const SignIn = async(() => import("../pages/auth/SignIn"));
const SignUp = async(() => import("../pages/auth/SignUp"));
const ResetPassword = async(() => import("../pages/auth/ResetPassword"));
const Page404 = async(() => import("../pages/auth/Page404"));
const Page500 = async(() => import("../pages/auth/Page500"));


// Dashboards components
// const Default = async(() => import("../pages/dashboards"));

// Users components
const UserLists = async(() => import("../pages/users/List"))
const Discovery = async(() => import("../pages/modules/Discovery"))
const Personal = async(() => import("../pages/modules/Personal"))
const Library = async(() => import("../pages/modules/Library"))
const New = async(() => import("../pages/modules/New"))
const Ratings = async(() => import("../pages/modules/Ratings"))
const Types = async(() => import("../pages/modules/Types"))
const Likes = async(() => import("../pages/modules/Likes"))

const discoveryRoutes = {
    id: "Khám phá",
    path: "/",
    icon: "/static/img/icon/user.svg",
    name: "Discovery",
    component: Discovery,
    containsHome: true
};

// const dashboardsRoutes = {
//     id: "Home",
//     path: "/",
//     name: "Default",
//     component: Default,
//     icon: "/static/img/icon/icon_home.png",
//     containsHome: true
// };

// const usersRoutes = {
//     id: "Users",
//     path: "/users/list",
//     icon: "/static/img/icon/icon_profile.png",
//     name: "User List",
//     component: UserLists
// };





const personalRoutes = {
    id: "Cá nhân",
    path: "/personal",
    icon: "/static/img/icon/disc.svg",
    name: "Personal",
    component: Personal
};


const libraryRoutes = {
    id: "Thư Viện",
    path: "/library",
    icon: "/static/img/icon/library.svg",
    name: "Library",
    component: Library
};



const newRoutes = {
    id: "Nhạc mới",
    path: "/new",
    icon: "/static/img/icon/new.svg",
    name: "New",
    component: New
};


const ratingsRoutes = {
    id: "Xếp hạng",
    path: "/ratings",
    icon: "/static/img/icon/rate.svg",
    name: "Ratings",
    component: Ratings
};



const typesRoutes = {
    id: "Thể loại",
    path: "/types",
    icon: "/static/img/icon/types.svg",
    name: "Types",
    component: Types
};


const createPlayListRoutes = {
    id: "Tạo playlist",
    path: "/create",
    icon: "/static/img/icon/plus.svg",
    name: "CreatePlayList",
};

const likesRoutes = {
    id: "Yêu thích",
    path: "/likes",
    icon: "/static/img/icon/likes.svg",
    name: "Likes",
    component: Likes
};


const signInRoutes = {
    id: "Đăng nhập",
    path: "/sign-in",
    name: "Sign In",
    component: SignIn
};


const signUpRoutes = {
    id: "Đăng nhập",
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp
};


const resetPassRoutes = {
    id: "Đăng nhập",
    path: "/reset-password",
    name: "Reset Password",
    component: ResetPassword
};
const authRoutes = {
    id: "Auth",
    path: "/auth",
    icon: <Users />,
    children: [
        {
            path: "/auth/sign-in",
            name: "Sign In",
            component: SignIn
        },
        {
            path: "/auth/sign-up",
            name: "Sign Up",
            component: SignUp
        },
        {
            path: "/auth/reset-password",
            name: "Reset Password",
            component: ResetPassword
        },
        {
            path: "/auth/404",
            name: "404 Page",
            component: Page404
        },
        {
            path: "/auth/500",
            name: "500 Page",
            component: Page500
        }
    ]
};

export const dashboard = [
    // dashboardsRoutes,
    // usersRoutes,
    discoveryRoutes,
    personalRoutes,
    libraryRoutes,
    newRoutes,
    ratingsRoutes,
    typesRoutes,
    createPlayListRoutes,
    likesRoutes,
    // signInRoutes,
    // signUpRoutes,
    // resetPassRoutes,
];

export const auth = [
    // dashboardsRoutes,
    // usersRoutes,
    discoveryRoutes,
    personalRoutes,
    libraryRoutes,
    newRoutes,
    ratingsRoutes,
    typesRoutes,
    createPlayListRoutes,
    likesRoutes,
    signInRoutes,
    signUpRoutes,
    resetPassRoutes,
];

export default [
    // dashboardsRoutes,
    // usersRoutes,
    discoveryRoutes,
    personalRoutes,
    libraryRoutes,
    newRoutes,
    ratingsRoutes,
    typesRoutes,
    createPlayListRoutes,
    likesRoutes,
    // signInRoutes,
    // signUpRoutes,
    // resetPassRoutes,
];
