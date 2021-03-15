import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Investments', icon: Box, type: 'sub', active: false, children: [
            { path: '/investments', title: 'Investments List', type: 'link', active: false},
            { path: '/investments/new', title: 'New Investment', type: 'link', active: false}
        ]
    },
    {
        title: 'Withdrawals', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/withdrawals', title: 'Withdrawal List', type: 'link' },
            { path: '/withdrawals/new', title: 'New Request', type: 'link' },
        ]
    },
    {
        title: 'Rewards', icon: Tag, type: 'sub', active: false, children: [
            { path: '/rewards', title: 'Rewards', type: 'link' },
        ]
    },
    {
        title: 'Reports',path:'/reports/report', icon: BarChart, type: 'link', active: false
    },
    {
        title: 'Settings', icon: Settings, type: 'sub', children: [
            { path: '/profile-list', title: 'Profile List', type: 'link' },
            { path: '/create-profile', title: 'Profile Create', type: 'link' },
        ]
    },
]
