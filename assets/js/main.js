const contentShowSlider = document.querySelector('.content__show-slider');
const featurePhoneList = document.querySelector('.content__phones-list .row');
const featureLapTabList = document.querySelector('.content__lapTab-list');
const accessoryList = document.querySelector('.content__accessory-list');
const watchList = document.querySelector('.content__watch-list');
const menWatchList = document.querySelector('.content__menWatch-list');
const womenWatchList = document.querySelector('.content__womenWatch-list');
const childWatchList = document.querySelector('.content__childWatch-list');
const navItems = document.querySelectorAll('.content__watch-nav-item');
const mainNewList = document.querySelector('.content__technology-main');
const sideNewList = document.querySelector('.content__technology-side');
const gameAppList = document.querySelector('.content__gameApp-list');
const viewmoreBtn = document.querySelector('.content__phones-btn');
const filterBtnList = document.querySelectorAll('.content__phones-filter button');
const contentPage = document.querySelector('.content');
const productPage = document.querySelector('.product');
const infoProduct = document.querySelector('.product__container');
const amount = document.querySelector('.header__mid-cart a > span');
const cart = document.querySelector('.ti-shopping-cart');
const cartShopping = document.querySelector('.header__mid-cart');

const app = {
    phonesDeal: [
        {
            image: './assets/images/oppoReno7.jpg',
            haveLabel: 'no',
            label: '',
            special: 'Đặt trước đến 25/03',
            name: 'OPPO Reno7 Z 5G',
            status: 'Hàng sắp về',
            oldPrice: '',
            price: 'Dự kiến: 10.490.000',
            gift: 'Bộ quà giá trị 3.49 Triệu(Máy Massage Cổ + Loa Bluetooth) + Trả góp 0%',
            rate: 'no',
            buy: ''
        },
        {
            image: './assets/images/samsungGalaxyA52.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Samsung Galaxy A52s 5G 128GB',
            status: 'Online giá rẻ',
            oldPrice: '10.990.000đ',
            price: '10.690.000',
            gift: 'Quà 1.500.000đ',
            rate: 'yes',
            buy: '419'
        },
        {
            image: './assets/images/ip13promax.jpg',
            haveLabel: 'no',
            label: '',
            special: 'VNPAY GIẢM 500K',
            name: 'iPhone 13 Pro Max 128GB',
            status: '',
            oldPrice: '',
            price: '33.990.000',
            gift: 'Quà 1.600.000đ',
            rate: 'yes',
            buy: '300'
        },
        {
            image: './assets/images/oppoReno6.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'OPPO Reno6 Z 5G',
            status: '',
            oldPrice: '',
            price: '9.490.000',
            gift: 'Quà 500.000đ',
            rate: 'yes',
            buy: '516'
        },
        {
            image: './assets/images/realmeC35.jpg',
            haveLabel: 'yes',
            label: './assets/images/docquyen.png',
            special: '',
            name: 'Realme C35',
            status: '',
            oldPrice: '',
            price: '3.990.000',
            gift: '',
            rate: 'no',
            buy: ''
        },
        {
            image: './assets/images/vivoY21s.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Vivo Y21s 6GB',
            status: '',
            oldPrice: '',
            price: '5.990.000',
            gift: 'Quà 450.000đ',
            rate: 'yes',
            buy: '95'
        },
        {
            image: './assets/images/samsungGalaxyA12.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Samsung Galaxy A12 6GB (2021)',
            status: '',
            oldPrice: '',
            price: '4.690.000',
            gift: 'Quà 900.000đ',
            rate: 'yes',
            buy: '261'
        },
        {
            image: './assets/images/realmeC21.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Realme C21Y 4GB',
            status: '',
            oldPrice: '',
            price: '4.290.000',
            gift: 'Quà 750.000đ',
            rate: 'yes',
            buy: '131'
        },
        {
            image: './assets/images/ip12.jpg',
            haveLabel: 'no',
            label: '',
            special: 'VNPAY GIẢM 500K',
            name: 'iPhone 12 64GB',
            status: '',
            oldPrice: '22.490.000đ',
            price: '19.690.000',
            gift: '',
            rate: 'yes',
            buy: '209'
        },
        {
            image: './assets/images/xiaomi11Lite.jpg',
            haveLabel: 'yes',
            label: './assets/images/baohanh18thang.png',
            special: '',
            name: 'Xiaomi 11 Lite 5G NE',
            status: '',
            oldPrice: '',
            price: '9.490.000',
            gift: 'Quà 1.200.000đ',
            rate: 'yes',
            buy: '267'
        },
    ],
    phones: [
        {
            image: './assets/images/galaxyS22.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Samsung Galaxy S22 Ultra 5G 256GB',
            status: '',
            oldPrice: '',
            price: '33.990.000',
            priceNumber: '33990000',
            gift: 'Quà 2.000.000đ',
            rate: 'yes',
            buy: '10',
            brand: 'samsung',
            video: 'https://www.youtube.com/embed/XQMh9vPKTpg',
            index: '1',
        },
        {
            image: './assets/images/samsungGalaxyA52.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Samsung Galaxy A52s 5G 128GB',
            status: 'Online giá rẻ',
            oldPrice: '10.990.000đ',
            price: '10.690.000',
            priceNumber: '10690000',
            gift: 'Quà 1.500.000đ',
            rate: 'yes',
            buy: '419',
            brand: 'samsung',
            video: 'https://www.youtube.com/embed/OCxqL7m7sh4',
            index: '2',
        },
        {
            image: './assets/images/ip13promax.jpg',
            haveLabel: 'no',
            label: '',
            special: 'VNPAY GIẢM 500K',
            name: 'iPhone 13 Pro Max 128GB',
            status: '',
            oldPrice: '',
            price: '33.990.000',
            priceNumber: '33990000',
            gift: 'Quà 1.600.000đ',
            rate: 'yes',
            buy: '300',
            brand: 'iphone',
            video: 'https://www.youtube.com/embed/jtMHyn8uFDI',
            index: '3',
        },
        {
            image: './assets/images/oppoReno6.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'OPPO Reno6 Z 5G',
            status: '',
            oldPrice: '',
            price: '9.490.000',
            priceNumber: '9490000',
            gift: 'Quà 500.000đ',
            rate: 'yes',
            buy: '516',
            brand: 'oppo',
            video: 'https://www.youtube.com/embed/1sBAx-OLDyY',
            index: '4',
        },
        {
            image: './assets/images/realmeC35.jpg',
            haveLabel: 'yes',
            label: './assets/images/docquyen.png',
            special: '',
            name: 'Realme C35',
            status: '',
            oldPrice: '',
            price: '3.990.000',
            priceNumber: '3990000',
            gift: '',
            rate: 'no',
            buy: '',
            brand: 'xiaomi',
            video: 'https://www.youtube.com/embed/ZfhxBMJuU6w',
            index: '5',
        },
        {
            image: './assets/images/vivoY21s.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Vivo Y21s 6GB',
            status: '',
            oldPrice: '',
            price: '5.990.000',
            priceNumber: '5990000',
            gift: 'Quà 450.000đ',
            rate: 'yes',
            buy: '95',
            brand: 'vivo',
            video: 'https://www.youtube.com/embed/_T5hzHq1NKc',
            index: '6',
        },
        {
            image: './assets/images/samsungGalaxyA12.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Samsung Galaxy A12 6GB (2021)',
            status: '',
            oldPrice: '',
            price: '4.690.000',
            priceNumber: '4690000',
            gift: 'Quà 900.000đ',
            rate: 'yes',
            buy: '261',
            brand: 'samsung',
            video: 'https://www.youtube.com/embed/w2rWYZxLM1I',
            index: '7',
        },
        {
            image: './assets/images/realmeC21.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Realme C21Y 4GB',
            status: '',
            oldPrice: '',
            price: '4.290.000',
            priceNumber: '4290000',
            gift: 'Quà 750.000đ',
            rate: 'yes',
            buy: '131',
            brand: 'xiaomi',
            video: 'https://www.youtube.com/embed/0fjJzl7ctbA',
            index: '8',
        },
        {
            image: './assets/images/ip12.jpg',
            haveLabel: 'no',
            label: '',
            special: 'VNPAY GIẢM 500K',
            name: 'iPhone 12 64GB',
            status: '',
            oldPrice: '22.490.000đ',
            price: '19.690.000',
            priceNumber: '19690000',
            gift: '',
            rate: 'yes',
            buy: '209',
            brand: 'iphone',
            video: 'https://www.youtube.com/embed/O_Kj9TJDR-o',
            index: '9',
        },
        {
            image: './assets/images/xiaomi11Lite.jpg',
            haveLabel: 'yes',
            label: './assets/images/baohanh18thang.png',
            special: '',
            name: 'Xiaomi 11 Lite 5G NE',
            status: '',
            oldPrice: '',
            price: '9.490.000',
            priceNumber: '9490000',
            gift: 'Quà 1.200.000đ',
            rate: 'yes',
            buy: '267',
            brand: 'xiaomi',
            video: 'https://www.youtube.com/embed/0D-kAL9DTLc',
            index: '10',
        },
        {
            image: './assets/images/ip11.jpg',
            haveLabel: 'no',
            label: '',
            special: 'VNPAY GIẢM 500K',
            name: 'iPhone 11 64GB',
            status: '',
            oldPrice: '',
            price: '16.990.000',
            priceNumber: '16990000',
            gift: 'Quà 1.800.000đ',
            rate: 'yes',
            buy: '787',
            brand: 'iphone',
            video: 'https://www.youtube.com/embed/d1SGTpH5SNA',
            index: '11',
        },
        {
            image: './assets/images/xiaomi11T.jpg',
            haveLabel: 'yes',
            label: './assets/images/docquyen.png',
            special: '',
            name: 'Xiaomi 11T 5G 256GB',
            status: '',
            oldPrice: '',
            price: '11.990.000',
            priceNumber: '11990000',
            gift: '',
            rate: 'yes',
            buy: '200',
            brand: 'xiaomi',
            video: 'https://www.youtube.com/embed/lb0DZ1O8Z08',
            index: '12',
        },
        {
            image: './assets/images/xiaomiRedmi11S.jpg',
            haveLabel: 'yes',
            label: './assets/images/baohanh18thang.png',
            special: '',
            name: 'Xiaomi Redmi Note 11S',
            status: '',
            oldPrice: '',
            price: '6.990.000',
            priceNumber: '6990000',
            gift: '',
            rate: 'yes',
            buy: '46',
            brand: 'xiaomi',
            video: 'https://www.youtube.com/embed/g9RuTKl9oO4',
            index: '13',
        },
        {
            image: './assets/images/vivoY15a.jpg',
            haveLabel: 'yes',
            label: './assets/images/docquyen.png',
            special: '',
            name: 'Vivo Y15a',
            status: '',
            oldPrice: '',
            price: '3.990.000',
            priceNumber: '3990000',
            gift: 'Quà 200.000đ',
            rate: 'yes',
            buy: '23',
            brand: 'vivo',
            video: 'https://www.youtube.com/embed/lUWEqgWBujI',
            index: '14',
        },
        {
            image: './assets/images/samsungGalaxyS21.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Samsung Galaxy S21 FE 5G',
            status: 'Chỉ bán online',
            oldPrice: '15.990.000đ',
            price: '14.990.000',
            priceNumber: '14990000',
            gift: '',
            rate: 'yes',
            buy: '23',
            brand: 'samsung',
            video: 'https://www.youtube.com/embed/ZwK3VZ8OJpE',
            index: '15',
        },
        {
            image: './assets/images/samsungGalaxyZ.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Samsung Galaxy Z Fold3 5G',
            status: '',
            oldPrice: '41.990.000đ',
            price: '38.990.000',
            priceNumber: '38990000',
            gift: '',
            rate: 'yes',
            buy: '23',
            brand: 'samsung',
            video: 'https://www.youtube.com/embed/2H5-XRstTro',
            index: '16',
        },
        {
            image: './assets/images/ip12pro.jpg',
            haveLabel: 'no',
            label: '',
            special: 'VNPAY GIẢM 500K',
            name: 'iPhone 12 Pro',
            status: '',
            oldPrice: '',
            price: '25.290.000',
            priceNumber: '25290000',
            gift: '',
            rate: 'yes',
            buy: '56',
            brand: 'iphone',
            video: 'https://www.youtube.com/embed/rkIXXGMcE-I',
            index: '17',
        },
        {
            image: './assets/images/vivoX70.jpg',
            haveLabel: 'yes',
            label: './assets/images/baohanh18thang.png',
            special: '',
            name: 'Vivo X70 Pro 5G',
            status: '',
            oldPrice: '',
            price: '19.990.000',
            priceNumber: '19990000',
            gift: 'Quà 1.500.000đ',
            rate: 'yes',
            buy: '15',
            brand: 'vivo',
            video: 'https://www.youtube.com/embed/YQ57cSB2w2c',
            index: '18',
        },
        {
            image: './assets/images/oppoReno4pro.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Oppo Reno4 Pro',
            status: '',
            oldPrice: '',
            price: '10.490.000',
            priceNumber: '10490000',
            gift: 'Quà 2.000.000đ',
            rate: 'yes',
            buy: '138',
            brand: 'oppo',
            video: 'https://www.youtube.com/embed/wfJhoECEwwE',
            index: '19',
        },
        {
            image: './assets/images/ipse.jpg',
            haveLabel: 'no',
            label: '',
            special: 'VNPAY GIẢM 500K',
            name: 'iPhone SE (2020) (Hộp mới)',
            status: '',
            oldPrice: '',
            price: '10.690.000',
            priceNumber: '10690000',
            gift: '',
            rate: 'yes',
            buy: '47',
            brand: 'iphone',
            video: 'https://www.youtube.com/embed/_AfVNv1SMMQ',
            index: '20',
        },
        {
            image: './assets/images/vivoV21.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Vivo V21 5G',
            status: '',
            oldPrice: '',
            price: '9.990.000',
            priceNumber: '9990000',
            gift: 'Quà 1.000.000đ',
            rate: 'yes',
            buy: '131',
            brand: 'vivo',
            video: 'https://www.youtube.com/embed/iO6PS97Stn8',
            index: '21',
        },
        {
            image: './assets/images/vivoY33S.jpg',
            haveLabel: 'yes',
            label: './assets/images/docquyen.png',
            special: '',
            name: 'Vivo Y33s',
            status: '',
            oldPrice: '',
            price: '6.990.000',
            priceNumber: '6990000',
            gift: 'Quà 300.000đ',
            rate: 'yes',
            buy: '18',
            brand: 'vivo',
            video: 'https://www.youtube.com/embed/vP6oOUtRrzs',
            index: '22',
        },
        {
            image: './assets/images/oppoA16k.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'OPPO A16K',
            status: '',
            oldPrice: '',
            price: '3.290.000',
            priceNumber: '3290000',
            gift: '',
            rate: 'yes',
            buy: '85',
            brand: 'oppo',
            video: 'https://www.youtube.com/embed/MhJ2AkJebt8',
            index: '23',
        },
        {
            image: './assets/images/oppoA16.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'OPPO A16',
            status: '',
            oldPrice: '',
            price: '3.990.000',
            priceNumber: '3990000',
            gift: '',
            rate: 'yes',
            buy: '56',
            brand: 'oppo',
            video: 'https://www.youtube.com/embed/hSawKNhVpdE',
            index: '24',
        },
        {
            image: './assets/images/oppoA74.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'OPPO A74 series',
            status: '',
            oldPrice: '',
            price: '6.690.000',
            priceNumber: '6690000',
            gift: '',
            rate: 'yes',
            buy: '209',
            brand: 'oppo',
            video: 'https://www.youtube.com/embed/fx70swP9KPA',
            index: '25',
        },
    ],
    lapTabs: [
        {
            image: './assets/images/lenovoIdeapad3.jpg',
            haveLabel: 'yes',
            label: './assets/images/window11.png',
            special: 'TUẦN LỄ IDEAPAD 3',
            name: 'Lenovo IdeaPad 3 14ITL6 i5 1135G7 (82H700WAVN)',
            status: '',
            config: 'yes',
            ram: 'RAM 8GB',
            ssd: 'SSD 512GB',
            oldPrice: '17.990.000đ',
            price: '15.690.000',
            gift: 'Quà 100.000đ',
            rate: 'no',
            buy: ''
        },
        {
            image: './assets/images/lenovoLegion5.jpg',
            haveLabel: 'yes',
            label: './assets/images/baohanh3nam.png',
            special: 'BỘ QUÀ GAMING',
            name: 'Lenovo Gaming Legion 5 15ACH6 R7 5800H (82JW00KMVN)',
            status: '',
            config: 'yes',
            ram: 'RAM 8GB',
            ssd: 'SSD 512GB',
            oldPrice: '31.990.000đ',
            price: '30.990.000',
            gift: 'Quà 2.680.000đ',
            rate: 'yes',
            buy: '13'
        },
        {
            image: './assets/images/lenovoIdeapad3i3.jpg',
            haveLabel: 'yes',
            label: './assets/images/window11.png',
            special: 'TUẦN LỄ IDEAPAD 3',
            name: 'Lenovo Ideapad 3 15ITL6 i3 1115G4 (82H801NEVN)',
            status: '',
            config: 'yes',
            ram: 'RAM 8GB',
            ssd: 'SSD 512GB',
            oldPrice: '15.490.000đ',
            price: '13.290.000',
            gift: 'Quà 100.000đ',
            rate: 'no',
            buy: ''
        },
        {
            image: './assets/images/macbookAirM1.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'MacBook Air M1 2020 7-core GPU',
            status: '',
            config: 'yes',
            ram: 'RAM 16GB',
            ssd: 'SSD 256GB',
            oldPrice: '33.990.000đ',
            price: '30.990.000',
            gift: 'Quà 990.000đ',
            rate: 'yes',
            buy: '13'
        },
        {
            image: './assets/images/samsungGalaxyTabS8.jpg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Samsung Galaxy Tab S8',
            status: '',
            config: 'no',
            ram: '',
            ssd: '',
            oldPrice: '',
            price: '20.990.000',
            gift: 'Quà 3.000.000đ',
            rate: 'no',
            buy: ''
        },
        {
            image: './assets/images/acerNitro5.jpg',
            haveLabel: 'yes',
            label: './assets/images/window11.png',
            special: 'TUẦN LỄ GAMING',
            name: 'Acer Nitro 5 Gaming AN515 45 R6EV R5 5600H (NH.QBMSV.006)',
            status: 'Online giá rẻ',
            config: 'yes',
            ram: 'RAM 8GB',
            ssd: 'SSD 512GB',
            oldPrice: '23.990.000đ',
            price: '21.590.000',
            gift: 'Quà 1.880.000đ',
            rate: 'yes',
            buy: '17'
        },
        {
            image: './assets/images/dell15.jpg',
            haveLabel: 'yes',
            label: './assets/images/window11.png',
            special: 'TRỞ LẠI TRƯỜNG',
            name: 'Dell Inspiron 15 3511 i3 1115G4 (P112F001CBL)',
            status: '',
            config: 'yes',
            ram: 'RAM 4GB',
            ssd: 'SSD 256GB',
            oldPrice: '15.290.000đ',
            price: '15.090.000',
            gift: 'Quà 550.000đ',
            rate: 'no',
            buy: ''
        },
        {
            image: './assets/images/asusVivobook.jpg',
            haveLabel: 'yes',
            label: './assets/images/window11.png',
            special: 'TRỞ LẠI TRƯỜNG',
            name: 'Asus VivoBook A415EA i3 1125G4 (EB1748W)',
            status: 'Online giá rẻ',
            config: 'yes',
            ram: 'RAM 8GB',
            ssd: 'SSD 512GB',
            oldPrice: '15.990.000đ',
            price: '14.790.000',
            gift: 'Quà 100.000đ',
            rate: 'yes',
            buy: '3'
        },
        {
            image: './assets/images/dellGamingG15.jpg',
            haveLabel: 'yes',
            label: './assets/images/window11.png',
            special: 'BỘ QUÀ GAMING',
            name: 'Dell Gaming G15 5511 i5 11400H (70266676)',
            status: '',
            config: 'yes',
            ram: 'RAM 8GB',
            ssd: 'SSD 256GB',
            oldPrice: '',
            price: '27.490.000',
            gift: 'Quà 1.730.000đ',
            rate: 'yes',
            buy: '4'
        },
        {
            image: './assets/images/alcatel.jpeg',
            haveLabel: 'no',
            label: '',
            special: '',
            name: 'Alcatel 3T8',
            status: 'Online giá rẻ',
            config: 'no',
            ram: '',
            ssd: '',
            oldPrice: '2.990.000đ',
            price: '2.690.000',
            gift: '',
            rate: 'no',
            buy: ''
        },
    ],
    accessory: [
        {
            image: './assets/images/airpods3.jpeg',
            special: 'GIẢM GIÁ SỐC',
            name: 'Tai nghe Bluetooth AirPods 3 Apple MME73 Trắng',
            status: 'Online giá rẻ',
            oldPrice: '5.490.000đ',
            price: '4.590.000',
            gift: '',
            rate: 'yes',
            buy: '36'
        },
        {
            image: './assets/images/airpodspro.jpeg',
            special: 'GIẢM GIÁ SỐC',
            name: 'Tai nghe Bluetooth AirPods Pro MagSafe Charge Apple MLWK3 Trắng',
            status: 'Online giá rẻ',
            oldPrice: '6.790.000đ',
            price: '5.190.000',
            gift: '',
            rate: 'yes',
            buy: '49'
        },
        {
            image: './assets/images/airpods2.jpeg',
            special: 'GIẢM GIÁ SỐC',
            name: 'Tai nghe Bluetooth AirPods 2 Apple MV7N2',
            status: 'Online giá rẻ',
            oldPrice: '4.390.000đ',
            price: '3.390.000',
            gift: '',
            rate: 'yes',
            buy: '138'
        },
        {
            image: './assets/images/twsSamsung.jpg',
            special: 'GIẢM GIÁ SỐC',
            name: 'Tai nghe Bluetooth True Wireless Samsung Galaxy Buds+ R175',
            status: 'Online giá rẻ',
            oldPrice: '2.140.000đ',
            price: '1.490.000',
            gift: '',
            rate: 'yes',
            buy: '107'
        },
        {
            image: './assets/images/captypec.jpeg',
            special: 'GIẢM GIÁ SỐC',
            name: 'Tai nghe Bluetooth True Wireless Samsung Galaxy Buds+ R175',
            status: 'Online giá rẻ',
            oldPrice: '590.000đ',
            price: '531.000',
            gift: '',
            rate: 'yes',
            buy: '14'
        },
        {
            image: './assets/images/loabluetooth.jpg',
            special: 'GIẢM GIÁ SỐC',
            name: 'Loa Bluetooth Wetop A3 Đen',
            status: 'Online giá rẻ',
            oldPrice: '700.000đ',
            price: '420.000',
            gift: '',
            rate: 'yes',
            buy: '10'
        },
        {
            image: './assets/images/pin10000.jpg',
            special: 'GIẢM GIÁ SỐC',
            name: 'Pin sạc dự phòng Polymer 10.000 mAh Hydrus PA CK01',
            status: 'Chỉ bán online',
            oldPrice: '490.000đ',
            price: '245.000',
            gift: '',
            rate: 'no',
            buy: ''
        },
        {
            image: './assets/images/twslg.jpg',
            special: 'GIẢM GIÁ SỐC',
            name: 'Tai nghe Bluetooth True Wireless LG Tone Free HBS-FN4',
            status: 'Online giá rẻ',
            oldPrice: '2.790.000đ',
            price: '900.000',
            gift: '',
            rate: 'yes',
            buy: '58'
        },
        {
            image: './assets/images/polymer10000.jpg',
            special: 'GIẢM GIÁ SỐC',
            name: 'Pin sạc dự phòng Polymer 10.000 mAh Type C eSaver PJ JP106S',
            status: 'Online giá rẻ',
            oldPrice: '600.000đ',
            price: '360.000',
            gift: '',
            rate: 'yes',
            buy: '248'
        },
        {
            image: './assets/images/webcam.jpg',
            special: 'GIẢM GIÁ SỐC',
            name: 'Webcam 1440P Rapoo C280 Đen',
            status: 'Online giá rẻ',
            oldPrice: '1.190.000đ',
            price: '892.000',
            gift: '',
            rate: 'no',
            buy: ''
        },
    ],
    watch: {
        smartWatch: [
            {
                image: './assets/images/samsungGalaxyWatch4.jpg',
                haveLabel: 'no',
                label: '',
                special: 'VNPAY GIẢM 300K',
                name: 'Samsung Galaxy Watch 4 Classic 42mm',
                status: '',
                config: 'yes',
                func1: 'Có chống nước',
                func2: 'Có nghe gọi',
                oldPrice: '',
                price: '8.490.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/appleWatchS7.jpg',
                haveLabel: 'no',
                label: '',
                special: 'THU CŨ GIẢM 666K',
                name: 'Apple Watch Series 7 GPS 45mm',
                status: '',
                config: 'yes',
                func1: 'Có chống nước',
                func2: 'Có nghe gọi',
                oldPrice: '12.990.000đ',
                price: '12.490.000',
                gift: '',
                rate: 'yes',
                buy: '21'
            },
            {
                image: './assets/images/samsungGalaxyWatch4V2.jpg',
                haveLabel: 'no',
                label: '',
                special: 'VNPAY GIẢM 300K',
                name: 'Samsung Galaxy Watch 4 Classic 46mm',
                status: '',
                config: 'yes',
                func1: 'Có chống nước',
                func2: 'Có nghe gọi',
                oldPrice: '',
                price: '8.990.000',
                gift: '',
                rate: 'yes',
                buy: '8'
            },
            {
                image: './assets/images/s6Ite.jpg',
                haveLabel: 'no',
                label: '',
                special: 'VNPAY GIẢM 400K',
                name: 'Apple Watch S6 LTE 40mm viền nhôm dây silicone',
                status: '',
                config: 'yes',
                func1: 'Có chống nước',
                func2: 'Có nghe gọi',
                oldPrice: '11.990.000đ',
                price: '9.990.000',
                gift: '',
                rate: 'yes',
                buy: '3'
            },
            {
                image: './assets/images/miband6.jpg',
                haveLabel: 'yes',
                label: './assets/images/1doi1.png',
                special: '',
                name: 'Vòng đeo tay thông minh Mi Band 6',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '1.290.000đ',
                price: '949.000',
                gift: '',
                rate: 'yes',
                buy: '87'
            },
            {
                image: './assets/images/samsungGalaxyFit2.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'Vòng tay thông minh Samsung Galaxy Fit2 đen',
                status: '',
                config: 'yes',
                func1: 'Có chống nước',
                func2: 'no',
                oldPrice: '990.000đ',
                price: '750.000',
                gift: '',
                rate: 'yes',
                buy: '94'
            },
            {
                image: './assets/images/oppoWatch.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'Oppo Watch 46mm dây silicone đen',
                status: '',
                config: 'yes',
                func1: 'Có nghe gọi',
                func2: 'no',
                oldPrice: '7.990.000đ',
                price: '5.193.000',
                gift: '',
                rate: 'yes',
                buy: '20'
            },
            {
                image: './assets/images/beub2den.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'Đồng hồ thông minh BeU B2 Đen',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '590.000đ',
                price: '490.000',
                gift: '',
                rate: 'yes',
                buy: '36'
            },
        ],
        menWatch: [
            {
                image: './assets/images/fs5638.png',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'FOSSIL 44 mm Nam FS5638',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '3.480.000đ',
                price: '2.958.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/tommy.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'TOMMY HILFIGER 44 mm Nam 1791740',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '3.900.000đ',
                price: '3.315.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/mvw.jpg',
                haveLabel: 'yes',
                label: './assets/images/japan.png',
                special: '',
                name: 'MVW 43 mm kính sapphire Nam ML050-01',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '1.890.000đ',
                price: '1.512.000',
                gift: '',
                rate: 'yes',
                buy: '3'
            },
            {
                image: './assets/images/coach.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'COACH 41 mm Nam 14602152',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '3.600.000đ',
                price: '1.980.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/casio.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'CASIO 33 mm Nam F-91WM-9ADF',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '543.000đ',
                price: '434.000',
                gift: '',
                rate: 'yes',
                buy: '3'
            },
            {
                image: './assets/images/citizen.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'CITIZEN 41 mm Nam BF2001-80E',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '3.550.000đ',
                price: '2.840.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/edifice.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'EDIFICE CASIO 48.4 mm Nam EFR-569DB-1AVUDF',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '5.010.000đ',
                price: '4.008.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
        ],
        womenWatch: [
            {
                image: './assets/images/citizenEU.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'CITIZEN 28 mm Nữ EU6073-53A',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '4.200.000đ',
                price: '2.100.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/elle.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'ELLE 26 mm ODEON Nữ ELL21064',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '2.180.000đ',
                price: '1.853.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/elle21030.png',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'ELLE 34 mm Nữ ELL21030',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '2.720.000đ',
                price: '1.496.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/dkny.png',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'DKNY 34 mm Nữ NY2947',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '4.390.000đ',
                price: '2.195.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/lacoste.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'LACOSTE 38 mm Nữ 2001005',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '4.600.000đ',
                price: '2.530.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/lacoste2001087.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'LACOSTE 38 mm Nữ 2001087',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '5.700.000đ',
                price: '3.135.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/fossil.png',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'FOSSIL 34 mm Nữ ES5069',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '3.480.000đ',
                price: '1.914.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
            {
                image: './assets/images/tommy1782199.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'TOMMY HILFIGER 38 mm Nữ 1782199',
                status: '',
                config: 'no',
                func1: '',
                func2: '',
                oldPrice: '4.200.000đ',
                price: '3.570.000',
                gift: '',
                rate: 'no',
                buy: ''
            },
        ],
        childWatch: [
            {
                image: './assets/images/kidcares6.jpg',
                haveLabel: 'yes',
                label: './assets/images/goivideo.png',
                special: '',
                name: 'Đồng hồ định vị trẻ em 4G Kidcare S6 Hồng',
                status: '',
                config: 'yes',
                func1: 'Có nghe gọi',
                func2: 'no',
                oldPrice: '1.990.000đ',
                price: '1.592.000',
                gift: '',
                rate: 'yes',
                buy: '7'
            },
            {
                image: './assets/images/kidcares8.jpg',
                haveLabel: 'yes',
                label: './assets/images/goivideo.png',
                special: '',
                name: 'Đồng hồ định vị trẻ em 4G Kidcare S8 Đen',
                status: '',
                config: 'yes',
                func1: 'Có nghe gọi',
                func2: 'no',
                oldPrice: '2.490.000đ',
                price: '1.992.000',
                gift: '',
                rate: 'yes',
                buy: '10'
            },
            {
                image: './assets/images/kidcare08s.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'Đồng hồ định vị trẻ em Kidcare 08S',
                status: '',
                config: 'yes',
                func1: 'Có nghe gọi',
                func2: 'no',
                oldPrice: '1.390.000đ',
                price: '1.112.000',
                gift: '',
                rate: 'yes',
                buy: '32'
            },
            {
                image: './assets/images/abardeent3.jpg',
                haveLabel: 'yes',
                label: './assets/images/goivideo.png',
                special: '',
                name: 'Đồng hồ định vị trẻ em 4G Abardeen T3 Hồng',
                status: '',
                config: 'yes',
                func1: 'Có nghe gọi',
                func2: 'no',
                oldPrice: '2.690.000đ',
                price: '2.152.000',
                gift: '',
                rate: 'yes',
                buy: '10'
            },
            {
                image: './assets/images/masstelsuper.jpg',
                haveLabel: 'yes',
                label: './assets/images/goivideo.png',
                special: '',
                name: 'Đồng hồ định vị trẻ em Masstel Super Hero 4G',
                status: '',
                config: 'yes',
                func1: 'Có nghe gọi',
                func2: 'no',
                oldPrice: '2.490.000đ',
                price: '1.867.000',
                gift: '',
                rate: 'yes',
                buy: '10'
            },
            {
                image: './assets/images/masstelhero.jpg',
                haveLabel: 'yes',
                label: './assets/images/goivideo.png',
                special: '',
                name: 'Đồng hồ định vị trẻ em Masstel Smart Hero 4G',
                status: '',
                config: 'yes',
                func1: 'Có nghe gọi',
                func2: 'no',
                oldPrice: '1.990.000đ',
                price: '1.492.000',
                gift: '',
                rate: 'yes',
                buy: '11'
            },
            {
                image: './assets/images/masstelsuperhero.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'Đồng hồ định vị trẻ em Masstel Super Hero',
                status: '',
                config: 'yes',
                func1: 'Có nghe gọi',
                func2: 'no',
                oldPrice: '1.490.000đ',
                price: '1.117.000',
                gift: '',
                rate: 'yes',
                buy: '36'
            },
            {
                image: './assets/images/kidcare26.jpg',
                haveLabel: 'no',
                label: '',
                special: '',
                name: 'Đồng hồ định vị trẻ em Kidcare 26 xanh',
                status: '',
                config: 'yes',
                func1: 'Có nghe gọi',
                func2: 'no',
                oldPrice: '1.290.000đ',
                price: '1.032.000',
                gift: '',
                rate: 'yes',
                buy: '16'
            },
        ]
    },
    technology: {
        mainnews: [
            {
                image: './assets/images/mainnew.jpg',
                title: 'Deal tốt ngại gì không chốt: Điểm mặt 2 chiếc iPhone bán chạy nhất giảm mê ly đến 2.3 triệu đồng, duy nhất trong tháng 3 này',
                time: '30 phút trước'
            }
        ],
        sidenews: [
            {
                image: './assets/images/sidenew1.jpg',
                title: 'Giá bán Redmi K50: Trang bị toàn những thông số cấu hình hàng đầu nhưng lại có mức giá rất dễ chịu, click xem sẽ rõ',
                time: '45 phút trước'
            },
            {
                image: './assets/images/sidenew2.jpg',
                title: 'Chỉ vài ngày cuối tuần: 3 mẫu Galaxy A cực HOT có ROM 128GB giảm sốc đến 1.5 triệu, thêm trả góp 0% sao mà chưa sắm nữa?',
                time: '1 giờ trước'
            },
            {
                image: './assets/images/sidenew3.jpg',
                title: 'Tới công chuyện: Ai hay chia sẻ tài khoản Netflix với bạn bè cho \'đỡ tiền\' thì xem ngay, có thể sẽ tốn thêm khoản phí nữa đấy',
                time: '1 giờ trước'
            },
            {
                image: './assets/images/sidenew4.jpg',
                title: 'Trên tay Nokia G11: Giá chỉ hơn 3 triệu* nhưng có màn hình 90 Hz cực đỉnh, pin dùng lên đến 3 ngày, sạc nhanh 18 W',
                time: '2 giờ trước'
            },
            {
                image: './assets/images/sidenew5.jpg',
                title: 'Sắm gì tháng 3 này? Xem ngay 5 mẫu tai nghe không dây rẻ nhất giảm đậm đến 60%, giá rẻ bèo chỉ từ 220K',
                time: '2 giờ trước'
            },
        ]
    },
    gameApp: [
        {
            image: './assets/images/thumbtocchien-600x360-1.jpg',
            avatar: './assets/images/tocchien.png',
            title: 'Liên Minh Huyền Thoại: Tốc Chiến',
            label: 'Miễn phí',
            category: 'Chiến thuật, Liên Minh: Tốc Chiến, Trí tuệ',
            suggest1: 'Top 21 game hay cho máy tính, laptop core i5 cực mượt',
            suggets2: 'Tổng hợp 5 laptop Asus chơi Liên Minh Huyền Thoại đáng mua nhất 2022',
        },
        {
            image: './assets/images/fifa.jpg',
            avatar: './assets/images/fifaavatar.png',
            title: 'EA Sports FIFA Online 4 - Tựa game bóng đá đỉnh cao',
            label: 'Miễn phí',
            category: 'Thể thao',
            suggest1: 'Top 21 game hay cho máy tính, laptop core i5 cực mượt',
            suggets2: 'Tổng hợp 8 laptop chơi FIFA Online 4 giá rẻ, đáng mua nhất 2022',
        },
        {
            image: './assets/images/picart.jpg',
            avatar: './assets/images/picartavatar.jpg',
            title: 'PicsArt: Ứng dụng tạo ảnh ghép & chỉnh sửa ảnh chuyên nghiệp',
            label: 'Miễn phí',
            category: 'Chụp & hình ảnh',
            suggest1: 'Cách tách nền online ảnh trên máy tính bằng PicsArt không cần cài đặt',
            suggets2: 'Hướng dẫn tạo ảnh có hiệu ứng tan biến đơn giản trên điện thoại bằng PicsArt',
        },
        {
            image: './assets/images/zingmp3.jpg',
            avatar: './assets/images/zing.jpg',
            title: 'Zing MP3 - Ứng dụng nghe nhạc trực tuyến',
            label: 'Miễn phí',
            category: 'Video và nhạc',
            suggest1: 'Cách tải nhạc lên Zing MP3 bằng điện thoại, máy tính',
            suggets2: 'Cách tải nhạc bản quyền trên Zing MP3 cho Iphone mới nhất hiện nay',
        },
    ],
    renderDealList: function () {
        const htmls = this.phonesDeal.map((phone, index) => {
            return `
                <a href="#">
                    <div class="item">
                        <div class="item__img">
                            <img src="${phone.image}">
                            <img src="${phone.label}" class="item__img-label ${phone.haveLabel}">
                        </div>
                        <div class="item__desc">
                            <div class="item__desc-special">${phone.special}</div>
                            <p>${phone.name}</p>
                            <span>${phone.status}</span>
                            <br>
                            <span class="old-price">${phone.oldPrice}</span>
                            <h1>${phone.price}đ</h1>
                            <span>${phone.gift}</span>
                            <div class="item__rate ${phone.rate}">
                                <div class="item__rate-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
        
                                <div class="item__rate-amount">
                                    <span>${phone.buy}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `
        }).join('');
        contentShowSlider.innerHTML = htmls;
    },
    renderFeaturePhoneList: function () {
        const htmls = this.phones.map((phone) => {
            return `
                <div class="${phone.brand} col l-2-4" data-index = ${phone.index}>
                    <div class="content__phones-list-item">
                        <a href="#">
                            <div class="item">
                                <div class="item__img">
                                    <img src="${phone.image}">
                                    <img src="${phone.label}" class="item__img-label ${phone.haveLabel}">
                                </div>
                                <div class="item__desc">
                                    <div class="item__desc-special">${phone.special}</div>
                                    <p>${phone.name}</p>
                                    <span>${phone.status}</span>
                                    <br>
                                    <span class="old-price">${phone.oldPrice}</span>
                                    <h1>${phone.price}đ</h1>
                                    <span>${phone.gift}</span>
                                    <div class="item__rate ${phone.rate}">
                                        <div class="item__rate-icon">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                
                                        <div class="item__rate-amount">
                                            <span>${phone.buy}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            `
        }).join('');
        featurePhoneList.innerHTML = htmls;
    },
    renderFeatureLapTabList: function () {
        const htmls = this.lapTabs.map((item, index) => {
            return `
                <a href="#">
                    <div class="item">
                        <div class="item__img">
                            <img src="${item.image}">
                            <img src="${item.label}" class="item__img-label ${item.haveLabel}">
                        </div>
                        <div class="item__desc">
                            <div class="item__desc-special">${item.special}</div>
                            <p>${item.name}</p>
                            <div class="item__config ${item.config}">
                                <span>${item.ram}</span>
                                <span>${item.ssd}</span>
                            </div>
                            <span>${item.status}</span>
                            <br>
                            <span class="old-price">${item.oldPrice}</span>
                            <h1>${item.price}đ</h1>
                            <span>${item.gift}</span>
                            <div class="item__rate ${item.rate}">
                                <div class="item__rate-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <div class="item__rate-amount">
                                    <span>${item.buy}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `
        }).join('');
        featureLapTabList.innerHTML = htmls;
    },
    renderAccessoryList: function () {
        const htmls = this.accessory.map((item, index) => {
            return `
                <a href="#">
                    <div class="item">
                        <div class="item__img">
                            <img src="${item.image}">
                        </div>
                        <div class="item__desc">
                            <div class="item__desc-special">${item.special}</div>
                            <p>${item.name}</p>
                            <span>${item.status}</span>
                            <br>
                            <span class="old-price">${item.oldPrice}</span>
                            <h1>${item.price}đ</h1>
                            <span>${item.gift}</span>
                            <div class="item__rate ${item.rate}">
                                <div class="item__rate-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <div class="item__rate-amount">
                                    <span>${item.buy}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `
        }).join('');
        accessoryList.innerHTML = htmls;
    },
    renderSmartWatchList: function () {
        const htmls = this.watch.smartWatch.map((item, index) => {
            return `
                <a href="#">
                    <div class="item">
                        <div class="item__img">
                            <img src="${item.image}">
                            <img src="${item.label}" class="item__img-label ${item.haveLabel}">
                        </div>
                        <div class="item__desc">
                            <div class="item__desc-special">${item.special}</div>
                            <p>${item.name}</p>
                            <div class="item__config ${item.config}">
                                <span>${item.func1}</span>
                                <span class="${item.func2}">${item.func2}</span>
                            </div>
                            <span>${item.status}</span>
                            <br>
                            <span class="old-price">${item.oldPrice}</span>
                            <h1>${item.price}đ</h1>
                            <span>${item.gift}</span>
                            <div class="item__rate ${item.rate}">
                                <div class="item__rate-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <div class="item__rate-amount">
                                    <span>${item.buy}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `
        }).join('');
        watchList.innerHTML = htmls;
    },
    renderMenWatchList: function () {
        const htmls = this.watch.menWatch.map((item, index) => {
            return `
                <a href="#">
                    <div class="item">
                        <div class="item__img">
                            <img src="${item.image}">
                            <img src="${item.label}" class="item__img-label ${item.haveLabel}">
                        </div>
                        <div class="item__desc">
                            <div class="item__desc-special">${item.special}</div>
                            <p>${item.name}</p>
                            <div class="item__config ${item.config}">
                                <span>${item.func1}</span>
                                <span class="${item.func2}">${item.func2}</span>
                            </div>
                            <span>${item.status}</span>
                            <br>
                            <span class="old-price">${item.oldPrice}</span>
                            <h1>${item.price}đ</h1>
                            <span>${item.gift}</span>
                            <div class="item__rate ${item.rate}">
                                <div class="item__rate-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <div class="item__rate-amount">
                                    <span>${item.buy}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `
        }).join('');
        menWatchList.innerHTML = htmls;
    },
    renderWomenWatchList: function () {
        const htmls = this.watch.womenWatch.map((item, index) => {
            return `
                <a href="#">
                    <div class="item">
                        <div class="item__img">
                            <img src="${item.image}">
                            <img src="${item.label}" class="item__img-label ${item.haveLabel}">
                        </div>
                        <div class="item__desc">
                            <div class="item__desc-special">${item.special}</div>
                            <p>${item.name}</p>
                            <div class="item__config ${item.config}">
                                <span>${item.func1}</span>
                                <span class="${item.func2}">${item.func2}</span>
                            </div>
                            <span>${item.status}</span>
                            <br>
                            <span class="old-price">${item.oldPrice}</span>
                            <h1>${item.price}đ</h1>
                            <span>${item.gift}</span>
                            <div class="item__rate ${item.rate}">
                                <div class="item__rate-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <div class="item__rate-amount">
                                    <span>${item.buy}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `
        }).join('');
        womenWatchList.innerHTML = htmls;
    },
    renderChildWatchList: function () {
        const htmls = this.watch.childWatch.map((item, index) => {
            return `
                <a href="#">
                    <div class="item">
                        <div class="item__img">
                            <img src="${item.image}">
                            <img src="${item.label}" class="item__img-label ${item.haveLabel}">
                        </div>
                        <div class="item__desc">
                            <div class="item__desc-special">${item.special}</div>
                            <p>${item.name}</p>
                            <div class="item__config ${item.config}">
                                <span>${item.func1}</span>
                                <span class="${item.func2}">${item.func2}</span>
                            </div>
                            <span>${item.status}</span>
                            <br>
                            <span class="old-price">${item.oldPrice}</span>
                            <h1>${item.price}đ</h1>
                            <span>${item.gift}</span>
                            <div class="item__rate ${item.rate}">
                                <div class="item__rate-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <div class="item__rate-amount">
                                    <span>${item.buy}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `
        }).join('');
        childWatchList.innerHTML = htmls;
    },
    renderTechnology: function () {
        const html = this.technology.mainnews.map((item, index) => {
            return `
                <div class="main-img">
                    <img src="${item.image}">
                </div>
                <div class="main-desc">
                    <p class="main-desc__title">${item.title}</p>
                    <span class="main-desc__time">${item.time}</span>
                </div>
            `
        }).join('');
        mainNewList.innerHTML = html;

        const htmls = this.technology.sidenews.map((item, index) => {
            return `
                <div class="side-item">
                    <div class="side-item__img">
                        <img src="${item.image}">
                    </div>
                    <div class="side-item__desc">
                        <p class="side-item__desc-title">${item.title}</p>
                        <span class="side-item__desc-time">${item.time}</span>
                    </div>
                </div>
            `
        }).join('');
        sideNewList.innerHTML = htmls;
    },
    renderGameApp: function () {
        const htmls = this.gameApp.map((item, index) => {
            return `
                <div class="item">
                    <div class="item__img">
                        <img src="${item.image}">
                    </div>
                    <div class="item__desc">
                        <div class="item__desc-avatar">
                            <img src="${item.avatar}">
                        </div>
                        <div class="item__desc-box">
                            <h4 class="box-title">${item.title}</h4>
                            <div class="box-label">
                                <span>${item.label}</span>
                                <p>${item.category}</p>
                            </div>
                        </div>
                    </div>
                    <div class="item__suggest">
                        <ul class="item__suggest-list">
                            <li>
                                <p>
                                    ${item.suggest1}
                                </p>
                            </li>
                            <li>
                                <p>
                                    ${item.suggets2}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            `
        }).join('');
        gameAppList.innerHTML = htmls;
    },
    clickProduct: function () {
        const singleProduct = document.querySelectorAll('.content__phones-list .row .col');
        singleProduct.forEach((item) => {
            item.onclick = (() => {
                contentPage.style.display = 'none';
                productPage.classList.remove('no');

                const htmls = this.phones.map((phone) => {
                    if (item.dataset.index === phone.index) {
                        return `
                            <div class="product__show">
                                <iframe width="560" height="315" src="${phone.video}?autoplay=1"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                                
                                <img src="${phone.image}" class="product__show-img no"></img>
                            </div>
                            <div class="product__desc">
                                <div class="product__name">
                                    <h1>${phone.name}</h1>
                                </div>
                                <div class="product__rate">
                                    <div class="product__rate-icon">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
    
                                    <div class="product__rate-buy">
                                        <span>${phone.buy} đánh giá</span>
                                    </div>
                                </div>
                                <div class="product__price">
                                    <p>
                                        Giá: <span>${phone.price}đ</span>
                                    </p>
                                    <span>Trả góp 0%</span>
                                </div>
                                <div class="product__gift">
                                    <p>
                                        Phiếu mua hàng <span>${phone.gift}</span> tại Bách Hóa Xanh
                                    </p>
                                </div>
                                <div class="product__buy-btn">
                                    <button data-index = ${phone.index}>
                                        <a href="./cart.html">
                                            <p>Thêm vào giỏ hàng</p>
                                        </a>
                                    </button>
                                </div>
                                <div class="product__pay-btn">
                                    <button>
                                        <p>
                                            Mua trả góp 0%
                                        </p>
                                        <span>Duyệt hồ sơ trong 5 phút</span>
                                    </button>
                                </div>
                                <div class="product__contact">
                                    <p>
                                        Gọi đặt mua <a href="tel:18001060">1800.1060</a>
                                        (7:30 - 22:00)
                                    </p>
                                </div>
                            </div>
                        `
                    }
                }).join('');
                infoProduct.innerHTML = htmls;
                const addToCartBtn = document.querySelector('.product__buy-btn button');
                const productList = [];
                addToCartBtn.onclick = (() => {
                    this.phones.map((phone) => {
                        if (addToCartBtn.dataset.index === phone.index) {
                            productList.push(
                                {
                                    image: phone.image,
                                    name: phone.name,
                                    price: phone.price,
                                    priceNumber: phone.priceNumber,
                                }
                            )
                            for (let i = 1; i <= this.phones.length; i++) {
                                if (addToCartBtn.dataset.index == i) {
                                    localStorage.setItem('product' + JSON.stringify(i), JSON.stringify(productList));
                                }
                            }
                        }
                    })
                })
            })
        })
        // Hiển thị số lượng sản phẩm trong giỏ hàng
        this.showAmountCart();
    },
    showAmountCart: function () {
        let count = 0;
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).includes('product')) {
                cartShopping.style.backgroundColor = 'rgba(255,255,255,0.4)';
                amount.style.display = 'inline-block';
                amount.innerText = ++count;
                cart.style.display = 'none';
            }
        }
    },
    handleEvents: function () {
        // Xử lý bộ lọc đồng hồ
        menWatchList.style.display = 'none';
        womenWatchList.style.display = 'none';
        childWatchList.style.display = 'none';
        navItems.forEach((item) => {
            item.onclick = () => {
                document.querySelector('.content__watch-nav-item.active').classList.remove('active');
                item.classList.add('active');
                switch (item.dataset.index) {
                    case '1':
                        watchList.style.display = 'block';
                        menWatchList.style.display = 'none';
                        womenWatchList.style.display = 'none';
                        childWatchList.style.display = 'none';
                        break;
                    case '2':
                        menWatchList.style.display = 'block';
                        watchList.style.display = 'none';
                        womenWatchList.style.display = 'none';
                        childWatchList.style.display = 'none';
                        break;
                    case '3':
                        womenWatchList.style.display = 'block';
                        menWatchList.style.display = 'none';
                        watchList.style.display = 'none';
                        childWatchList.style.display = 'none';
                        break;
                    case '4':
                        childWatchList.style.display = 'block';
                        menWatchList.style.display = 'none';
                        watchList.style.display = 'none';
                        womenWatchList.style.display = 'none';
                        break;
                }
            }
        })

        // Xử lý bộ lọc điện thoại
        filterBtnList.forEach((btn) => {
            btn.onclick = (() => {
                document.querySelector('.content__phones-filter button.active').classList.remove('active');
                btn.classList.add('active');
                if (btn.dataset.brand === 'all') {
                    this.renderFeaturePhoneList();
                }
                else {
                    const filterItemList = this.phones.filter((item) => {
                        return item.brand === btn.dataset.brand;
                    })
                    const htmls = filterItemList.map((phone) => {
                        return `
                                <div class="${phone.brand} col l-2-4" data-index = ${phone.index}>
                                    <div class="content__phones-list-item">
                                        <a href="#">
                                            <div class="item">
                                                <div class="item__img">
                                                    <img src="${phone.image}">
                                                    <img src="${phone.label}" class="item__img-label ${phone.haveLabel}">
                                                </div>
                                                <div class="item__desc">
                                                    <div class="item__desc-special">${phone.special}</div>
                                                    <p>${phone.name}</p>
                                                    <span>${phone.status}</span>
                                                    <br>
                                                    <span class="old-price">${phone.oldPrice}</span>
                                                    <h1>${phone.price}đ</h1>
                                                    <span>${phone.gift}</span>
                                                    <div class="item__rate ${phone.rate}">
                                                        <div class="item__rate-icon">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                        </div>
                                
                                                        <div class="item__rate-amount">
                                                            <span>${phone.buy}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            `
                    }).join('');
                    featurePhoneList.innerHTML = htmls;
                }
                this.clickProduct();
            })
        })
    },
    start: function () {
        this.renderDealList();
        this.renderFeaturePhoneList();
        this.renderFeatureLapTabList();
        this.renderAccessoryList();
        this.renderSmartWatchList();
        this.renderMenWatchList();
        this.renderWomenWatchList();
        this.renderChildWatchList();
        this.renderTechnology();
        this.renderGameApp();
        this.clickProduct();
        this.showAmountCart();
        this.handleEvents();
    }
}
app.start();