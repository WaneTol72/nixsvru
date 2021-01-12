/*-------------Не Трогать!-----------------*/
import GRAF from "./assets/GRAF.webp";
import DIAMOND from "./logo/DIAMOND.webp";
import BARON from "./assets/BARON.webp";
import GOLD from "./logo/GOLD.webp";
import LEG from "./assets/LEG.webp";
import IRON from "./logo/IRON.webp";
import GER from "./assets/GER.webp";
import EMERALD from "./logo/EMERALD.webp";
import Pic5 from "./assets/pic5.webp";
/*-----------------------------------------*/
/*
title - заголовок/название
titleColor - цвет заголовка/названия
subtitle - подзаголовок (обычно не используется)
description - текстр краткого описания
fullDesc - текст подробного описания
price - цена
image - фон
picture - картинка

Картинки и фоны редачить я буду, а ты пошел нахуй
 */
export const slides = [
    {
        title: "Герцог",
        titleColor: "limegreen",
        description: `Направьте ваш народ на путь истинный
                      ваш долг - отдать себя на благо государства...`,
        perks:
        `Префикс в табе и чате Duke
        Все питомцы + все действия с питомцами
        8 точек дома
        10 приватов
        Собственный варп
        Флаг для привата`,
        commands:
        `/nick Изменить ник
        /kit duke Уникальный игровой набор
        head [ник] Позволяет брать голову игрока
        /grindstone Открывает точило (починка и снятие чар)
        /loom Открывает ткацкий станок
        /smithingtable Открывает стол кузнеца
        /stonecutter Открывает камнерез`,
        pets: `визер
        шалкер
        гаст
        фантом
        овца
        лавомерка
        эфрит
        evoker
        тропическая рыба
        лама
        житель деревни
        зомби житель
        пчела`,
        price: 100,
        image: GER,
        picture: EMERALD
    },
    {
        title: "Граф",
        titleColor: "lightseagreen",
        description: `Да будет так, ваше сиятельство,
                      мы признаны вашему роду...`,
        perks:
        `Префикс в табе и чате Graph
        Питомцы третьего уровня
        6 точек дома
        8 приватов
        3 собственных варпа
        Флаг для привата
        Использовать инвентарь питомца`,
        commands:
        `Команды
        /back Вернуть на точку смерти
        /kit graph Уникальный игровой набор
        /echest Открыть эндерсундук
        /hat Надеть блок на голову
        /firework Кастомизирует фейерверк
        /cartographytable Открыть стол картографа
        Так же наследует Legionary, Baron`,
        pets:
        `иглобрюх
        панда
        слайм
        мул
        рыба`,
        price: 100,
        image: GRAF,
        picture: DIAMOND
    },
    {
        title: "Барон",
        titleColor: "gold",
        description: `Вам не ново бывать в кругах знати
                     вы должны быть примером для общины...`,
        perks:
        `Префикс в табе и чате Baron
        Питомцы второго уровня
        4 точки дома
        6 приватов
        2 собственных варпов
        Флаг для приватов
        Надевать пета на голову
        Использовать цветной текст в чате`,
        commands:
        `/heal Лечение (раз в 60 сек)
        /anvil Открыть наковальню
        /kit baron Уникальный игровой набор
        /depth Узнать количество блоков над уровнем моря
        /eglow Подсветка
        Наследует возможности Legionary`,

        pets:
        `полярный медведь
        хоглин
        волк
        зомби лошедь
        агрессивный паук`,
        price: 50,
        image: BARON,
        picture: GOLD
    },
    {
        title: "Легионер",
        titleColor: "silver",
        description: `Имя, которое не просто звучит
                     они увидят... ваше превосходство...`,
        perks:
        `Префикс в табе и чате Legionary
        Питомцы первого уровня
        2 точки дома
        4 привата
        Собственный варп
        Флаг для приватов
        Садиться на пета`,
        commands:
        `Команды
        /feed Пополнение полоски голода
        /repair Починка экипировки
        /kill Харакири (убить себя)
        /kit legionary Уникальный игровой набор
        /craft Открыть верстак
        /clear Очистка инвентаря
        /co i Инфо о действии игрока над блоком
        /chestsort Автоматическая сортировка сундука
        `,
        pets:
        `кошка
        лошед
        лиса
        кролик
        корова
        дельфин
        паук
        черепаха
        голем
        свин`,
        price: 25,
        image: LEG,
        picture: IRON
    },
    {
        title: "Из грязи в князи",
        titleColor: "green",
        description: `Разбанит вас за небольшую плату`,
        fulldesc: `Лох`,
        price: 100,
        image: Pic5,
        picture: EMERALD
    }
];
