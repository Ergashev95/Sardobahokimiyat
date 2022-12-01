function calendar(id, year, month) {
    var eventsList = [{ "id": 641, "title": "Hamkorlikning qamrovi va ko\u2018lami kengaymoqda", "date": "2022-11-02 17:00:00", "link": "\/oz\/news\/2022\/11\/02\/hamkorlikning-qamrovi-va-kolami-kengajmoqda" }, { "id": 642, "title": "Sirdaryoda anorning eng yaxshi Ozarbayjon navlari yetishtiriladi", "date": "2022-11-03 11:00:00", "link": "\/oz\/news\/2022\/11\/03\/mirzaobodda-anorning-eng-yakhshi-ozarbajzhon-navlari-etishtiriladi" }, { "id": 643, "title": "Sirdaryo va Janubiy Koreya viloyatlari o\u2018rtasida ko\u2018p qirrali hamkorlik bo\u2018yicha qator kelishuvlarga erishildi", "date": "2022-11-03 20:00:00", "link": "\/oz\/news\/2022\/11\/03\/sirdaryo-va-zhanubij-koreya-viloyatlari-ortasida-kop-qirrali-hamkorlik-bojicha-qator-kelishuvlarga-erishildi" }, { "id": 644, "title": "O\u2018zaro ishonch, strategik sheriklikka asoslangan hamkorlik", "date": "2022-11-05 09:00:00", "link": "\/oz\/news\/2022\/11\/05\/ozaro-ishonch-strategik-sheriklikka-asoslangan-hamkorlik" }, { "id": 645, "title": "Sirdaryoda xususiy tibbiyot muassasalari soni 129, xizmatlar turi 130\u00a0taga\u00a0yetdi", "date": "2022-11-07 10:00:00", "link": "\/oz\/news\/2022\/11\/07\/sirdaryoda-khususij-tibbiyot-muassasalari-soni-129-khizmatlar-turi-130-taga-etdi" }, { "id": 646, "title": "Yo\u2018lsozlarning og\u2018iri yengil bo\u2018ldi", "date": "2022-11-07 13:00:00", "link": "\/oz\/news\/2022\/11\/07\/jolsozlarning-ogiri-engil-boldi" }, { "id": 647, "title": "\u00a0E\u02bcLON", "date": "2022-11-07 12:00:00", "link": "\/oz\/news\/2022\/11\/07\/elon" }, { "id": 648, "title": "Sirdaryoda O\u2018zbekiston kasaba uyushmalari kuniga bag\u2018ishlangan tadbir bo\u2018lib o\u2018tdi", "date": "2022-11-08 12:00:00", "link": "\/oz\/news\/2022\/11\/08\/sirdaryoda-ozbekiston-kasaba-uyushmalari-kuniga-bagishlangan-tadbir-bolib-otdi" }, { "id": 649, "title": "Mirzaobod tumaniga media-tur uyushtirildi", "date": "2022-11-09 12:00:00", "link": "\/oz\/news\/2022\/11\/09\/mirzaobod-tumaniga-media-tur-uyushtirildi" }, { "id": 650, "title": "Sirdaryoda uzum danagidan moy olish yo\u2018lga qo\u2018yildi", "date": "2022-11-01 12:00:00", "link": "\/oz\/news\/2022\/11\/01\/sirdaryoda-uzum-danagidan-moj-olish-jolga-qojildi" }, { "id": 651, "title": "Janubiy Koreyaning rasmiy va ishbilarmon doira vakillari Sirdaryoda", "date": "2022-11-10 13:20:00", "link": "\/oz\/news\/2022\/11\/10\/zhanubij-koreyalik-rasmij-va-ishbilarmon-doira-vakillari-sirdaryoda" }, { "id": 652, "title": "Sirdaryoda \u201cKoreya-O\u2018zbekiston\u201d biznes assotsiatsiyasining vakolatxonasi ochildi", "date": "2022-11-11 16:30:00", "link": "\/oz\/news\/2022\/11\/11\/sirdaryo-viloyatida-koreya-ozbekiston-biznes-assotsiatsiyasining-vakolatkhonasi-ochildi" }, { "id": 653, "title": "Tibbiyot sohasi vakillari e\u02bczoz va ehtiromda", "date": "2022-11-12 13:30:00", "link": "\/oz\/news\/2022\/11\/12\/tibbiyot-sohasi-vakillari-ezoz-va-ehtiromda" }, { "id": 654, "title": "\u201cMuruvvat\u201d internat uyi kasaba uyushmalari e\u02bctiborida", "date": "2022-11-04 11:20:00", "link": "\/oz\/news\/2022\/11\/04\/muruvvat-internat-uji-kasaba-uyushmalari-etiborida" }, { "id": 655, "title": "Sirdaryoda \u00abYil ayoli\u00bb tanlovi g\u2018oliblari va gender tengligi uchun kurashgan eng faol tashkilotlar aniqlandi", "date": "2022-11-16 14:00:00", "link": "\/oz\/news\/2022\/11\/16\/sirdaryoda-jil-ayoli-millij-tanlovi-goliblari-va-gender-tengligi-uchun-kurashgan-eng-faol-tashkilotlar-aniqlandi" }, { "id": 656, "title": "Prezident sovg\u2018asi menga katta\u00a0motivatsiya\u00a0berdi", "date": "2022-11-14 15:00:00", "link": "\/oz\/news\/2022\/11\/14\/prezident-sovgasi-menga-katta-motivatsiya-berdi" }, { "id": 657, "title": "Mangu\u00a0hilpirasin\u00a0yurtim bayrog\u2018i", "date": "2022-11-18 10:00:00", "link": "\/oz\/news\/2022\/11\/18\/mangu-hilpirasin-yurtim-bajrogi" }, { "id": 658, "title": "Suvdan oqilona foydalanish: amaliyot va samara", "date": "2022-11-17 12:00:00", "link": "\/oz\/news\/2022\/11\/17\/suvdan-oqilona-fojdalanish-amaliyot-va-samara" }, { "id": 659, "title": "Umumta\u02bclim maktabida quyosh fotoelektr stansiyasi ishga tushirildi", "date": "2022-11-15 14:00:00", "link": "\/oz\/news\/2022\/11\/15\/umumtalim-maktabida-quyosh-fotoelektr-stantsiyasi-ishga-tushirildi" }, { "id": 660, "title": "Sirdaryolik yigit\u00a0singlisiga\u00a0buyragini berdi", "date": "2022-11-21 10:20:00", "link": "\/oz\/news\/2022\/11\/21\/sirdaryolik-jigit-singlisiga-bujragini-berdi" }, { "id": 661, "title": "Boyovut tumani, Shirin va Yangiyer shahar hokimliklarida yosh kadrlar ish boshladi", "date": "2022-11-22 13:00:00", "link": "\/oz\/news\/2022\/11\/22\/boyovut-tumani-shirin-va-yangier-shahar-hokimliklarida-yosh-kadrlar-ish-boshladi" }, { "id": 662, "title": "Sirdaryoda xitoylik investorlar ishtirokida biznes-forum o\u2018tkaziladi", "date": "2022-11-22 17:00:00", "link": "\/oz\/news\/2022\/11\/22\/sirdaryoda-khitoj-forumi-otkaziladi" }, { "id": 663, "title": "Davlat xizmatchisi qanday bo\u2018lishi kerak?", "date": "2022-11-23 11:10:00", "link": "\/oz\/news\/2022\/11\/23\/davlat-khizmatchisi-qandaj-bolishi-kerak" }, { "id": 664, "title": "Sirdaryoda \u201cEng yaxshi ijtimoiy tashabbus\u201d hamda \u201cMahalla \u2013 besh tashabbus beshigi\u201d ko\u2018rik-tanlovlarining g\u2018oliblari aniqlandi", "date": "2022-11-23 14:00:00", "link": "\/oz\/news\/2022\/11\/23\/eng-yakhshi-izhtimoij-tashabbus-hamda-mahalla-besh-tashabbus-beshigi-korik-tanlovlarining-goliblari-aniqlandi" }, { "id": 665, "title": "Transport-logistika\u00a0xabini\u00a0tashkil etish loyihasi muhokama etildi", "date": "2022-11-23 17:00:00", "link": "\/oz\/news\/2022\/11\/23\/transport-logistika-khabini-tashkil-etish-lojihasi-muhokama-etildi" }, { "id": 666, "title": "Kuzgi shudgorlash - mo\u2018l hosil garovidir", "date": "2022-11-24 10:00:00", "link": "\/oz\/news\/2022\/11\/24\/kuzgi-shudgorlash-mol-hosil-garovidir" }, { "id": 667, "title": "\u201cChirchiq\u201d poligonida o\u2018tgan yig\u2018inda Sirdaryo jamoasi birinchilikni qo\u2018lga kiritdi", "date": "2022-11-25 18:00:00", "link": "\/oz\/news\/2022\/11\/25\/chirchiq-poligonida-otgan-jiginda-sirdaryo-zhamoasi-birinchilikni-qolga-kiritdi" }, { "id": 668, "title": "Viloyatga hokim vazifasini bajaruvchi tayinlandi", "date": "2022-11-26 18:00:00", "link": "\/oz\/news\/2022\/11\/26\/viloyatga-hokim-vazifasini-bazharuvchi-tajinlandi" }, { "id": 669, "title": "Faoliyatning ilk kuni qanday o\u2018tdi?", "date": "2022-11-27 16:00:00", "link": "\/oz\/news\/2022\/11\/27\/faoliyatning-ilk-kuni-qandaj-otdi" }];
    var monthsList = [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentabr",
        "Oktabr",
        "Noyabr",
        "Dekabr"
    ];
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month = monthsList;

    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }

    for (var i = 1; i <= Dlast; i++) {
        var clalEvent = [];
        for (var j = 0; j < eventsList.length; j++) {
            if (typeof (eventsList[j]) != 'undefined') {
                var dat = new Date(eventsList[j].date);
                if (D.getFullYear() == dat.getFullYear() && D.getMonth() == dat.getMonth() && i == dat.getDate()) {
                    clalEvent.push(eventsList[j]);
                }
            }
        }

        if (clalEvent.length > 0) {
            calendar += '<td class="active" day="' + i + '">' + i;
        } else {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                calendar += '<td>' + i;
            }
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }
    for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;</td>';
    $('#' + id + ' tbody').html(calendar);
    $('#' + id + ' thead td').eq(1).html(month[D.getMonth()] + ' ' + D.getFullYear());
    $('#' + id + '').attr('month', D.getMonth());
    $('#' + id + '').attr('year', D.getFullYear());

    if ($('#' + id + ' tbody tr').length < 5) {
        $('#' + id + ' tbody').append('<tr><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td></tr>');
    }

    $('#calendar td').click(function () {
        if ($(this).hasClass('active')) {
            var day = $(this).attr('day');
            var month = $('#calendar').attr('month');
            var year = $('#calendar').attr('year');
            var lng = $('#calendar').attr('lng');
            var calDetalls = '';
            for (var g = 0; g < eventsList.length; g++) {
                var dat = new Date(eventsList[g].date);
                if (year == dat.getFullYear() && month == dat.getMonth() && day == dat.getDate()) {
                    calDetalls += '<li>' + eventsList[g].date + '<a href="' + eventsList[g].link + '">' + eventsList[g].title + '</a></li>';
                }
            }
            $('.calendarBox .calView .calData').html(calDetalls);
            $('.calendarBox .calView').fadeIn();
            $('#calendar').addClass('blur');
        }
    });
}

$(document).ready(function () {

    calendar("calendar", new Date().getFullYear(), new Date().getMonth());

    $('#calendar .prev').click(function () {
        calendar("calendar", $('#calendar').attr('year'), parseFloat($('#calendar').attr('month')) - 1);
    });

    $('#calendar .next').click(function () {
        calendar("calendar", $('#calendar').attr('year'), parseFloat($('#calendar').attr('month')) + 1);
    });

    $('.calendarBox .calView .closebtn').click(function (e) {
        e.preventDefault();
        $('.calendarBox .cal').fadeTo("fast", 1);
        $('.calendarBox .calView').fadeOut();
        $('#calendar').removeClass('blur');
    });
});
