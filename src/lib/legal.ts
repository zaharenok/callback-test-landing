import type { Lang } from "@/lib/copy";

type Block = { h: string; p: string[] };

export const legal: Record<
  Lang,
  {
    back: string;
    updated: string;
    privacyTitle: string;
    termsTitle: string;
    privacy: Block[];
    terms: Block[];
  }
> = {
  en: {
    back: "Back",
    updated: "Updated 31 October 2026",
    privacyTitle: "Privacy",
    termsTitle: "Terms",
    privacy: [
      {
        h: "This page",
        p: [
          "The form on the homepage is a demo of CallBack. If you leave a number, we use it to place the one AI call you asked for. We do not add it to a mailing list and we do not sell it.",
        ],
      },
      {
        h: "What we process",
        p: [
          "The phone number, the fact that you ticked the box, the time of the request, and what is said on that one call so the call can be placed.",
        ],
      },
      {
        h: "Why",
        p: [
          "You asked to be called. The box is the opt-in. It is never pre-ticked. This page places one call and stops. That is the same idea as an explicit “call me” under §107 TKG in Austria and the UWG in Germany.",
        ],
      },
      {
        h: "If you buy the service",
        p: [
          "You are the controller of your own leads. We process those numbers only to place the calls you configured, for people who asked you to call them. We do not build our own list from your forms or from your ads.",
        ],
      },
      {
        h: "Meta and Google",
        p: [
          "If you connect Meta Lead Ads or a Google lead form, the number arrives from that campaign and is called for the purpose you set. The ad platform remains responsible for the ad click itself.",
        ],
      },
      {
        h: "How long, and who else sees it",
        p: [
          "A demo number is used for the call and is not kept for marketing. On a paid account, call logs stay while the subscription is active and are deleted within 30 days after it ends, sooner if you ask.",
          "The number is shared with the telephone network and the voice provider that places the call. Not with advertisers.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You can ask for access, correction, or deletion. On this demo, do not submit the form if you do not want the call. A second call is not made from this page.",
        ],
      },
    ],
    terms: [
      {
        h: "The demo",
        p: [
          "The call from this site is one demo so you can hear the product. It is not a free month and it is not a contract. A plan starts only when you agree one.",
        ],
      },
      {
        h: "The plans",
        p: [
          "Form is €199 a month, Campaign is €349 a month, Desk is €599 a month. Prices exclude VAT. Extra calls are €0.40. You can cancel any time. The month you have paid runs until it ends.",
        ],
      },
      {
        h: "What the voice is",
        p: [
          "The caller is an AI and it says so. You are not buying a human receptionist. You still close the deal.",
        ],
      },
      {
        h: "Whose numbers",
        p: [
          "You may only send numbers of people who asked to be called, on your site or on your ad form. That opt-in is yours to collect. We do not call people who did not ask, and we do not hide that the caller is an AI.",
        ],
      },
      {
        h: "What we do not promise",
        p: [
          "We do not promise that a lead will buy. We promise the call goes out to someone who opted in, and that you receive the summary.",
        ],
      },
    ],
  },
  de: {
    back: "Zurück",
    updated: "Stand 31. Oktober 2026",
    privacyTitle: "Datenschutz",
    termsTitle: "AGB",
    privacy: [
      {
        h: "Diese Seite",
        p: [
          "Das Formular auf der Startseite ist eine Demo von CallBack. Wenn ihr eine Nummer lasst, nutzen wir sie für den einen KI-Anruf, um den ihr gebeten habt. Wir nehmen sie nicht in einen Verteiler und wir verkaufen sie nicht.",
        ],
      },
      {
        h: "Was wir verarbeiten",
        p: [
          "Die Telefonnummer, die Tatsache dass das Kästchen gesetzt wurde, der Zeitpunkt und das Gespräch dieses einen Anrufs, damit der Anruf stattfinden kann.",
        ],
      },
      {
        h: "Warum",
        p: [
          "Ihr habt um den Anruf gebeten. Das Kästchen ist das Opt-in. Es ist nie vorausgewählt. Diese Seite ruft einmal an und hört auf. Dasselbe Prinzip wie ein ausdrückliches „ruft mich an“ nach §107 TKG in Österreich und dem UWG in Deutschland.",
        ],
      },
      {
        h: "Wenn ihr den Dienst kauft",
        p: [
          "Ihr seid Verantwortliche für eure eigenen Leads. Wir verarbeiten diese Nummern nur, um die Anrufe zu machen, die ihr eingerichtet habt, an Menschen, die euch um einen Anruf gebeten haben. Aus euren Formularen oder Anzeigen bauen wir keine eigene Liste.",
        ],
      },
      {
        h: "Meta und Google",
        p: [
          "Wenn ihr Meta Lead Ads oder ein Google-Leadformular verbindet, kommt die Nummer aus dieser Kampagne und wird für den Zweck angerufen, den ihr gesetzt habt. Für den Klick auf die Anzeige bleibt die Plattform zuständig.",
        ],
      },
      {
        h: "Wie lange, und wer es noch sieht",
        p: [
          "Eine Demo-Nummer wird für den Anruf genutzt und nicht für Werbung aufgehoben. In einem bezahlten Konto bleiben Anrufprotokolle, solange das Abo läuft, und werden innerhalb von 30 Tagen nach dem Ende gelöscht, früher auf Wunsch.",
          "Die Nummer geht an das Telefonnetz und an den Anbieter, der den Anruf führt. Nicht an Werbekunden.",
        ],
      },
      {
        h: "Eure Rechte",
        p: [
          "Ihr könnt Auskunft, Berichtigung oder Löschung verlangen. Auf dieser Demo schickt das Formular nicht ab, wer den Anruf nicht will. Einen zweiten Anruf gibt es von dieser Seite nicht.",
        ],
      },
    ],
    terms: [
      {
        h: "Die Demo",
        p: [
          "Der Anruf von dieser Seite ist eine Demo, damit ihr das Produkt hören könnt. Er ist kein Freimonat und kein Vertrag. Ein Tarif beginnt erst, wenn ihr ihn vereinbart.",
        ],
      },
      {
        h: "Die Tarife",
        p: [
          "Formular kostet €199 im Monat, Kampagne €349 im Monat, Desk €599 im Monat. Preise zzgl. USt. Weitere Anrufe €0,40. Jederzeit kündbar. Der bezahlte Monat läuft bis zu seinem Ende.",
        ],
      },
      {
        h: "Was die Stimme ist",
        p: [
          "Es ruft eine KI an, und sie sagt das. Ihr kauft keine menschliche Rezeption. Den Abschluss macht ihr.",
        ],
      },
      {
        h: "Wessen Nummern",
        p: [
          "Ihr dürft nur Nummern schicken von Menschen, die um einen Anruf gebeten haben, auf eurer Seite oder im Anzeigenformular. Dieses Opt-in holt ihr ein. Wir rufen niemanden an, der nicht gefragt hat, und wir verstecken nicht, dass eine KI anruft.",
        ],
      },
      {
        h: "Was wir nicht versprechen",
        p: [
          "Wir versprechen nicht, dass ein Lead kauft. Wir versprechen, dass der Anruf an jemanden geht, der zugestimmt hat, und dass ihr die Zusammenfassung bekommt.",
        ],
      },
    ],
  },
  ru: {
    back: "Назад",
    updated: "Обновлено 31 октября 2026",
    privacyTitle: "Конфиденциальность",
    termsTitle: "Условия",
    privacy: [
      {
        h: "Эта страница",
        p: [
          "Форма на главной — демо CallBack. Если вы оставляете номер, мы используем его для одного звонка ИИ, о котором вы попросили. Мы не добавляем его в рассылку и не продаём.",
        ],
      },
      {
        h: "Что мы обрабатываем",
        p: [
          "Номер телефона, факт отметки в поле согласия, время запроса и содержание этого одного звонка — чтобы звонок состоялся.",
        ],
      },
      {
        h: "Зачем",
        p: [
          "Вы сами попросили звонок. Галочка и есть согласие. Она никогда не стоит заранее. С этой страницы уходит один звонок, и на этом всё. Тот же принцип, что явное «перезвоните мне» по §107 TKG в Австрии и UWG в Германии.",
        ],
      },
      {
        h: "Если вы покупаете сервис",
        p: [
          "Вы — оператор данных своих лидов. Мы обрабатываем эти номера только чтобы сделать звонки, которые вы настроили, людям, которые попросили вас позвонить. Из ваших форм и рекламы мы свой список не собираем.",
        ],
      },
      {
        h: "Meta и Google",
        p: [
          "Если вы подключаете Meta Lead Ads или форму Google, номер приходит из этой кампании и ему звонят с той целью, которую вы задали. За сам клик по объявлению отвечает площадка.",
        ],
      },
      {
        h: "Сколько храним и кто ещё видит",
        p: [
          "Номер с демо используется для звонка и не остаётся для рекламы. В платном аккаунте записи звонков живут, пока действует подписка, и удаляются в течение 30 дней после её конца, раньше — если вы попросите.",
          "Номер передаётся телефонной сети и провайдеру голоса, который делает звонок. Не рекламодателям.",
        ],
      },
      {
        h: "Ваши права",
        p: [
          "Можно запросить доступ, исправление или удаление. На этом демо не отправляйте форму, если звонок не нужен. Второй звонок с этой страницы не делается.",
        ],
      },
    ],
    terms: [
      {
        h: "Демо",
        p: [
          "Звонок с этого сайта — одно демо, чтобы вы услышали продукт. Это не бесплатный месяц и не договор. Тариф начинается только когда вы его согласуете.",
        ],
      },
      {
        h: "Тарифы",
        p: [
          "«Форма» — €199 в месяц, «Кампания» — €349 в месяц, «Стол» — €599 в месяц. Цены без НДС. Сверх пакета — €0,40 за звонок. Отмена в любой момент. Оплаченный месяц идёт до конца.",
        ],
      },
      {
        h: "Кто говорит",
        p: [
          "Звонит ИИ, и он так и говорит. Вы не покупаете живую ресепшен. Сделку закрываете вы.",
        ],
      },
      {
        h: "Чьи номера",
        p: [
          "Можно передавать только номера людей, которые сами попросили звонок, на вашем сайте или в форме объявления. Это согласие собираете вы. Мы не звоним тем, кто не просил, и не скрываем, что звонит ИИ.",
        ],
      },
      {
        h: "Чего мы не обещаем",
        p: [
          "Мы не обещаем, что лид купит. Мы обещаем, что звонок уйдёт тому, кто согласился, и что вы получите итог.",
        ],
      },
    ],
  },
};
