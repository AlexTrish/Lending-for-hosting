import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        //home
      "about": {
        "title": "We are a hosting service provider",
        "description": "The company provides services: virtual hosting, VDS/VPS rental, abuse-resistant servers, dedicated servers, domain registration, and additional hosting services. RETRY.HOST started its journey in 2021 and now offers a full range of hosting services, having already gained hundreds of satisfied customers.\nOur prices are genuinely affordable, so everyone can take advantage of our services! Our technical specialists work around the clock! Support is available in English as well."
      },
      "monitoring": {
        "title": "Monitoring",
        "description": "A company providing services: virtual hosting, VDS/VPS rental, abuse-resistant servers and dedicated hosting, domain registration, and additional hosting services."
      },
      "features": {
        "bulletproofServers": {
          "title": "Bulletproof Servers",
          "description": "These are servers that do not respond to certain types of complaints from other resources. We do not block a server or site if a complaint has been received from any resource."
        },
        "dataCenter": {
          "title": "Data Center",
          "description": "We provide only branded equipment from companies like Hewlett Packard, IBM, and Dell. When renting a server, you don't have to worry about its technical condition."
        }
      },
      "content_main": {
        "title": {
          "part1": "Fast",
          "part2": "Reliable",
          "part3": "Affordable"
        },
        "description": "We guarantee the operation of our servers for the entire paid period! Cloud server hosting in Europe.",
        "joinButton": "Join Us"
      },
      "services": {
        "title": "Popular Services",
        "service1": "Service 1",
        "service2": "Service 2",
        "service3": "Service 3"
      },
      //Menu
      "brand": "RETRY HOST",
      "menu": {
        "main": "Home",
        "services": "Services",
        "vps": "VPS Rental",
        "vds": "VDS Rental",
        "vpn": "VPN Rental",
        "domains": "Domains Rental",
        "cloudPanel": "Cloud Panel",
        "bulletproof": "Bulletproof Servers",
        "referral": "Referral Program",
        "about": "About Us",
        "rules": "Rules",
        "terms": "Terms",
        "auth": "Log In"
      },
      //Dashboard
      "VPS": {
        "title": "VPS",
        "description": "is a hosting provider service where the user receives a personal remote desktop. A VPS user has full root access and can install any available software without restrictions. In other words, it’s a remote computer that runs 24/7. If you encounter any difficulties with software installation, our team is always ready to assist.",
      },
      "cloudPanel": {
       "title": "Cloud Panel",
        "description": "is a hosting provider service where the user receives a personal remote desktop. A VPS user has full root access and can install any available software without restrictions. In other words, it’s a remote computer that runs 24/7. If you encounter any difficulties with software installation, our team is always ready to assist.",
        },
      "bulletproof": {
        "title": "Bulletproof Servers",
        "description": "is a hosting provider service where the user receives a personal remote desktop. A VPS user has full root access and can install any available software without restrictions. In other words, it’s a remote computer that runs 24/7. If you encounter any difficulties with software installation, our team is always ready to assist."
      },
      "domains": {
        "title": "Domains",
        "description": "is a hosting provider service where the user receives a personal remote desktop. A VPS user has full root access and can install any available software without restrictions. In other words, it’s a remote computer that runs 24/7. If you encounter any difficulties with software installation, our team is always ready to assist.",
        "buyButton": "Purchase Domain"
      },
      "referral": {
        "title": "Referral System",
        "description": "is a hosting provider service where the user receives a personal remote desktop. A VPS user has full root access and can install any available software without restrictions. In other words, it’s a remote computer that runs 24/7. If you encounter any difficulties with software installation, our team is always ready to assist."
      },

      "vds": {
        "title": "VDS",
        "description": "is a service of the hosting provider where the user gets their own remote desktop. The VPS user has full root access for usage. They can install any available software without restrictions. In other words, it is a remote computer that runs 24/7. If you have difficulties installing the software, our team is always ready to help."
      },
      "vpn": {
          "title": "VPN",
          "description": "is a service of the hosting provider that allows secure internet connection, hiding your IP address and encrypting data."
      },
      "plans": {
        "basic": {
          "label": "Plan",
          "name": "Basic",
          "price": "499 ₽/month",
          "savings": "You can save up to 45% by choosing a longer order period."
        },
        "improved": {
          "label": "Plan",
          "name": "Improved",
          "price": "899 ₽/month",
          "savings": "You can save up to 45% by choosing a longer order period."
        },
        "advanced": {
          "label": "Plan",
          "name": "Advanced",
          "price": "1299 ₽/month",
          "savings": "You can save up to 45% by choosing a longer order period."
        },
        "premium": {
          "label": "Plan",
          "name": "Premium",
          "price": "2499 ₽/month",
          "savings": "You can save up to 45% by choosing a longer order period."
        }
      },
      "buy": "Order",
      "check": "Check",
      "title-domain": "Purchase a domain",
      "input":"Enter domain",
      "right": "© 2024 RETRY.HOST. All rights reserved.",
      "Details": "Details",

         // rules
        "general": "General Provisions",
        "support": "Some servers may require an Administrator password. Please contact support.",
        "speedNote": "Speeds in tariffs are labeled 'UP TO' and may vary based on user activity. Thus, for tariffs with a speed of 250 Mbps, you may get approximately 40-70 Mbps depending on user activity. Consider this when ordering services.",
        "rightToRefuse": "RETRY.HOST reserves the right to refuse cooperation without explanation.",
        "nsRequirement": "Our NS must be specified through the dashboard on all sites. Otherwise, the service may be blocked without recovery.",
        "clientResponsibility": "After service activation, all actions on the server are the client's responsibility. RETRY HOST is not liable.",
        "providerIssue": "For servers stopped due to network provider issues, unused days will be credited to the account.",
        "dataResponsibility": "RETRY.HOST is not liable for data storage on servers stopped for violations, expiration, or other reasons. If the client requests access for file retrieval, RETRY.HOST reserves the right to refuse.",
        "blockRights": "RETRY.HOST may fully block all services and delete the client's account for rule violations. If there’s a positive balance, all funds are forfeited without refund.",
        "domainLimit": "Up to three domains are allowed on all tariffs, including abuse-resistant ones. For more, use the abuse-resistant hosting service.",
        "prohibitedUsage": "Exploit, malware, RDP-Bruteforce, and Cobalt Strike are prohibited on all tariffs, including abuse-resistant ones.",
        "renewal": "Service Renewal",
        "priceChange": "The server renewal cost may change based on company policy and traffic.",
        "declineRenewal": "Retry.Host may decline renewal even after payment, with funds refunded to the client account within 3 days.",
        "latePenalty": "Late renewal incurs penalties: renewal is from the service disconnection date.",
        "noNotification": "RETRY.HOST may not notify of price changes; clients should check updates in their dashboard.",
        "euroRate": "Prices depend on EURO rate; renewal and activation may vary.",
        "gracePeriod": "Services can be renewed within 4 days; after this, they are deleted.",
        "refundPolicy": "Refund Policy",
        "refundDetails": "For unprovided or poor service, we may refund to a card or wallet. See below for policy details.",
        "serviceFailure": "Refunds are issued if the server failed due to our fault. Otherwise, no refunds are provided.",
        "ruleViolations": "Servers stopped for rule violations are non-refundable.",
        "vpsRefund": "VPS refunds take 3-7 days, excluding weekends and holidays.",
        "dedicatedRefund": "Dedicated server refunds take 10-14 days, excluding weekends and holidays.",
        "setupFee": "A setup fee of 1750 RUB for dedicated servers is included and non-refundable.",
        "abuseResistant": "Refunds are not available for abuse-resistant services. Contact specialists via support ticket or Telegram @retry_host for assistance or server replacement.",
        "restrictedContent": "Servers hosting phishing, gambling, or crypto scams are non-refundable.",
        "partialRefund": "Clients may receive up to 30% refund if cancelling within the first 20 days.",
        "contractChange": "The document agreement may change without client notification. Clients are responsible for checking updates.",
        "usageRules": "Usage Rules",
        "intellectualProperty": "Violation of intellectual property rights, including copyright, patents, trademarks.",
        "personalData": "Distribution of third-party personal data.",
        "maliciousContent": "Contains harmful content like viruses, trojans, port scanners, bruteforce programs, stealers, parsers, etc.",
        "childProtectionPt1": "Distribution or promotion of child pornography, or using words like",
        "childProtectionPt2": ", in media descriptions.",
        "phishing": "Phishing.",
        "spam": "Spam.",
        "hateSpeech": "Promotion of violence or racist content.",
        "fraud": "Fraud in any form.",
        "pyramidSchemes": "Financial pyramids, casinos, sports betting, drugs as per Opium Law, torrent trackers.",
        "cryptoMining": "Cryptocurrency mining, any financial manipulations with wallets, etc.",
        "unlicensedStreaming": "Streaming without a license.",
        "adultServices": "Adult services."
      }
    },
    ru: {
      translation: {
      //home
      "about": {
        "title": "Мы - компания, предоставляющая услуги хостинга",
        "description": "Компания, предоставляющая услуги: виртуальный хостинг, аренда VDS/VPS, абузоустойчивых серверов и выделенных, регистрация доменов и дополнительные услуги хостинга. RETRY.HOST начал свой путь в 2021 году, а теперь предоставляет полный спектр услуг хостинга, мы уже набрали сотни довольных клиентов.\nЦены у нас действительно доступные, чтобы каждый мог воспользоваться услугами! Наши технические специалисты работают круглые сутки! Поддержка доступна и на английском языке."
      },
      "monitoring": {
        "title": "Мониторинг",
        "description": "Компания, предоставляющая услуги: виртуальный хостинг, аренда VDS/VPS, абузоустойчивых серверов и выделенных, регистрация доменов и дополнительные услуги хостинга."
      },
      "features": {
        "bulletproofServers": {
          "title": "Абузоустойчивые серверы",
          "description": "— это сервера, на которых мы не реагируем на определенный вид жалоб от других ресурсов."
        },
        "dataCenter": {
          "title": "Дата Центр",
          "description": "Мы предоставляем только брендовое оборудование от таких компаний, как Hewlett Packard, IBM и Dell."
        }
      },
      "content_main": {
        "title": {
          "part1": "Быстро",
          "part2": "Надежно",
          "part3": "Доступно"
        },
        "description": "Мы гарантируем работу наших серверов на весь оплаченный срок! Облачный хостинг в Европе.",
        "joinButton": "Присоединиться к нам"
      },
      "services": {
        "title": "Популярные Услуги",
        "service1": "Услуга 1",
        "service2": "Услуга 2",
        "service3": "Услуга 3"
      },
      //Menu
      "brand": "RETRY HOST",
      "menu": {
        "main": "Главная",
        "services": "Услуги",
        "vps": "Аренда VPS",
        "vds": "Аренда VDS",
        "vpn": "Аренда VPN",
        "domains": "Аренда Домены",
        "cloudPanel": "Cloud Panel",
        "bulletproof": "Абузоустойчивые серверы",
        "referral": "Реферальная система",
        "about": "О нас",
        "rules": "Правила",
        "terms": "Условия",
        "auth": "Войти"
      },
      //Dashboard
      "VPS": {
        "title": "VPS",
        "description": "это услуга хостинг провайдера, где пользователь получает свой удаленный рабочий стол. У пользователя VPS есть полный root доступ и он может устанавливать любое доступное программное обеспечение без ограничений. Другими словами, это удалённый компьютер, который работает 24/7. Если у вас возникнут сложности с установкой программного обеспечения, наша команда всегда готова помочь.",
      },
      "cloudPanel": {
        "title": "Cloud-Panel",
        "description": "это услуга хостинг провайдера, где пользователь получает свой удаленный рабочий стол. У пользователя VPS есть полный root доступ и он может устанавливать любое доступное программное обеспечение без ограничений. Другими словами, это удалённый компьютер, который работает 24/7. Если у вас возникнут сложности с установкой программного обеспечения, наша команда всегда готова помочь.",
      },
      "bulletproof": {
        "title": "Абузоустойчивые серверы",
        "description": "это услуга хостинг провайдера, где пользователь получает свой удаленный рабочий стол. У пользователя VPS есть полный root доступ и он может устанавливать любое доступное программное обеспечение без ограничений. Другими словами, это удалённый компьютер, который работает 24/7. Если у вас возникнут сложности с установкой программного обеспечения, наша команда всегда готова помочь."
      },
      "domains": {
        "title": "Домены",
        "description": "это услуга хостинг провайдера, где пользователь получает свой удаленный рабочий стол. У пользователя VPS есть полный root доступ и он может устанавливать любое доступное программное обеспечение без ограничений. Другими словами, это удалённый компьютер, который работает 24/7. Если у вас возникнут сложности с установкой программного обеспечения, наша команда всегда готова помочь.",
        "buyButton": "Купить домен"
      },
      "referral": {
        "title": "Реферальная система",
        "description": "это услуга хостинг провайдера, где пользователь получает свой удаленный рабочий стол. У пользователя VPS есть полный root доступ и он может устанавливать любое доступное программное обеспечение без ограничений. Другими словами, это удалённый компьютер, который работает 24/7. Если у вас возникнут сложности с установкой программного обеспечения, наша команда всегда готова помочь."
      },
      "vds": {
        "title": "VDS",
        "description": "это услуга хостинг провайдера, где пользователь получает свой удаленный рабочий стол. У пользователя VPS есть полный root доступ и он может устанавливать любое доступное программное обеспечение без ограничений. Другими словами, это удалённый компьютер, который работает 24/7. Если у вас возникнут сложности с установкой программного обеспечения, наша команда всегда готова помочь."
      },
      "vpn": {
        "title": "VPN",
        "description": "это услуга хостинг провайдера, которая позволяет безопасно подключаться к интернету, скрывая ваш IP адрес и шифруя данные."
      },
      "plans": {
        "basic": {
          "label": "Тариф",
          "name": "Базовый",
          "price": "499 ₽/мес",
          "savings": "Вы можете сэкономить до 45% при выборе более длительного срока."
        },
        "improved": {
          "label": "Тариф",
          "name": "Улучшенный",
          "price": "899 ₽/мес",
          "savings": "Вы можете сэкономить до 45% при выборе более длительного срока."
        },
        "advanced": {
          "label": "Тариф",
          "name": "Расширенный",
          "price": "1299 ₽/мес",
          "savings": "Вы можете сэкономить до 45% при выборе более длительного срока."
        },
        "premium": {
          "label": "Тариф",
          "name": "Премиум",
          "price": "2499 ₽/мес",
          "savings": "Вы можете сэкономить до 45% при выборе более длительного срока."
        }
      },
      "buy": "Заказать",
      "check": "Проверить",
      "title-domain": "Приобрести домен",
      "input":"Введите домен",
      "right": "© 2024 RETRY.HOST. Все права защищены.",
      "Details": "Подробнее",

        // rules
        "general": "Общее положение",
        "support": "На некоторых серверах может требовать пароль Администратора, обратитесь в техническую поддержку.",
        "speedNote": "Скорость в тарифах указывается с примечанием 'ДО' и может колебаться в зависимости от активности пользователей, следовательно в тарифах со скоростью соединения 250 мбит/сек, Вы можете получить приблизительно от 40-70 мбит/сек, в зависимости от активности пользователей. Учитывайте данное примечание при заказе услуг.",
        "rightToRefuse": "RETRY.HOST в праве отказать в сотрудничестве без объяснения причины.",
        "nsRequirement": "На всех сайтах необходимо указывать наши NS через личный кабинет. В противном случае услуга может быть заблокирована без возможности восстановления.",
        "clientResponsibility": "После активации услуги, все действия на сервере - ответственность клиента. RETRY HOST не несёт ответственность.",
        "providerIssue": "Сервера остановленные по вине провайдера сети, остаток неиспользуемых дней начисляется на счёт в личный кабинет.",
        "dataResponsibility": "RETRY.HOST не несёт ответственности за хранения данных на серверах, если сервер был остановлен за нарушение, либо по истечению срока или другим причинам и клиент желает запросить доступ к серверу для выгрузки файлов и тому подобное, RETRY.HOST в праве отказать клиенту.",
        "blockRights": "При нарушении правил использования, RETRY.HOST вправе полностью заблокировать все услуги, а также удалить личный кабинет клиента. Если у клиента остался положительный баланс, все средства анулируются без возврата.",
        "domainLimit": "На всех тарифах, включая абузоустойчивые, разрешено использовать не более трёх доменных адресов, если Вам требуется больше, используйте услугу абузоустойчивого хостинга.",
        "prohibitedUsage": "На всех тарифах, включая абузоустойчивые запрещается использовать: exploit, malware, RDP-Bruteforce, Cobalt Strike",
        "renewal": "Продление услуг",
        "priceChange": "Стоимость продления сервера может изменяться в зависимости от политики компании, а также поступающего трафика на сервера.",
        "declineRenewal": "Retry.Host вправе отклонить продление сервера, даже после оплаты, если есть на то причины. Денежные средства будут возвращены клиенту на его счёт личного кабинета в течении 3 рабочих дней.",
        "latePenalty": "За просроченное продление услуги на клиента будут применены штрафные санкции: продление будет производиться с даты отключения услуги.",
        "noNotification": "RETRY.HOST вправе не уведомлять клиентов об изменений цен на услуги провайдера, клиент сам обязан проверять изменение цен в личном кабинете.",
        "euroRate": "Цены на сервера формируются от курса EURO, поэтому стоимость продления и активации услуги может изменяться.",
        "gracePeriod": "Услугу можно продлить в течении 4 дней, по истечению данного срока услуга удаляется.",
        "refundPolicy": "Возврат денежных средств",
        "refundDetails": "За неоказанную или некачественно оказанную услугу, мы можем произвести возврат средств на карту или кошелек. С правилами возврата можно ознакомиться ниже:",
        "serviceFailure": "Возврат средств можно получить, если сервер перестал работать по нашей вине. В других случаях, возврат средств не производится.",
        "ruleViolations": "Сервера, остановленные за нарушение правил использования, не подлежат денежному возврату.",
        "vpsRefund": "Возврат средств за виртуальные сервера производится от 3 до 7 дней, выходные и праздничные дни не учитываются.",
        "dedicatedRefund": "Возврат средств за выделенные сервера производится от 10 до 14 дней, выходные и праздничные дни не учитываются.",
        "setupFee": "За установку выделенного сервера взимается плата в размере 1750 рублей, она уже включена в стоимость выделенного сервера. Данная сумма не возвращается.",
        "abuseResistant": "Возврат средств за абузоустойчивые услуги не предусмотрен. Вы всегда можете обратиться к специалистам для настройки Вашего сервера в тикете на сайте, либо в Telegram @retry_host или запросить замену сервера.",
        "restrictedContent": "Возврат средств не предусмотрен за услуги, где размещался: фишинг, казино, криптоскаминг и прочее.",
        "partialRefund": "Клиент может вернуть не более 30% от стоимости сервера, если желает отказаться от услуг в первые 20 дней.",
        "contractChange": "Документальный договор может изменяться и дополняться без ведома клиента. Клиент сам обязан проверять наличие обновления данного договора.",
        "usageRules": "Правила пользования сервисом",
        "intellectualProperty": "Нарушение прав третьих лиц на интеллектуальную собственность, включая авторские права, патенты, торговые знаки.",
        "personalData": "Распространение персональных данных третьих лиц.",
        "maliciousContent": "Содержание вредоносного контента, включая вирусы, трояны, программы для сканирования портов, брутфорс, стиллеры, парсеры и тому подобное.",
        "childProtectionPt1": "Распространение или пропаганда детской порнографии, а также использование на сайте слов:",
        "childProtectionPt2": "и их аналогов в описании изображений, видео.",
        "phishing": "Фишинг.",
        "spam": "Флуд.",
        "hateSpeech": "Пропаганда насилия, расистские материалы.",
        "fraud": "Мошенничество в любом его проявлении.",
        "pyramidSchemes": "Финансовые пирамиды, казино, ставки на спорт, наркотические вещества по Opium Law, торрент-трекеры.",
        "cryptoMining": "Майнинг криптовалют, любые финансовые махинации с кошельками и подобное.",
        "unlicensedStreaming": "Стриминг без лицензии.",
        "adultServices": "Интимные услуги."
      }
    }
  },
  lng: "ru", // default language
  fallbackLng: "en", // fallback language
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;