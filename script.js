document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram?.WebApp || null;
    tg?.ready?.();
    tg?.expand?.();
    tg?.setHeaderColor?.('#1b0e31');
    tg?.setBackgroundColor?.('#100b1c');

  // Contact unique ORIGINAL68
  const contactLinks = [
    { name: 'TELEGRAM', url: 'https://t.me/original68off', className: 'telegram-canal', text: '✈️ Telegram ✈️' }
  ];

  // --- DONNÉES ORIGINAL68 : HASH et WEED -> 12 FARMS -> 26 PRODUITS ---
  // Dans chaque produit : tarifs: [{ weight:'1g', price:20 }, ...]
  const appData = [
    {
        "id": "RESINE",
        "name": "RESINE",
        "quality": "RESINE",
        "image": "Original68_Fond.jpg",
        "icon": "🍫",
        "productCount": 24,
        "farmCount": 11,
        "farms": [
            {
                "id": "no-farm",
                "name": "Apiculteur farm 🐝🍯",
                "icon": "🌴",
                "badgeText": "Double Static • 1 référence",
                "products": [
                    {
                        "id": "no-farm-tropical-mango",
                        "name": "Tropical Mango 🥭",
                        "flag": "🌴",
                        "farm": "Apiculteur farm 🐝🍯",
                        "type": "Double Static",
                        "image": "ProductAP.png",
                        "video": "VideoAP.mov",
                        "description": "Un double static préparer par un passioner pour vous faire le meilleur travail  possible c est du top.\n Le Produit qui parle à ma place ‼️\n Rapport Qualité Prix 🥇 🏆",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "5g",
                                "price": 50
                            },
                            {
                                "weight": "10g",
                                "price": 100
                            }
                        ]
                    }
                ]
            },
            {
                "id": "golden-drytech",
                "name": "GOLDEN DRYTECH FARM ✨",
                "icon": "🏆",
                "badgeText": "105µ • 1 référence",
                "products": [
                    {
                        "id": "golden-fruit-joy",
                        "outOfStock": true, // Produit indisponible : aucune commande possible
                        "name": "Fruit Joy 💍",
                        "flag": "🏆",
                        "farm": "GOLDEN DRYTECH ✨",
                        "type": "105µ",
                        "image": "ProductGFJ.png",
                        "video": "VideoGFJ.mp4",
                        "description": "Sélection 105µ · GOLDEN DRYTECH FARM ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "5g",
                                "price": 50
                            }
                        ]
                    }
                ]
            },
            {
                "id": "nova-farm",
                "name": "NOVA FARM⭕️🔱 🫆",
                "icon": "💠",
                "badgeText": "Fresh Frozen / Double Static • 5 références",
                "products": [
                    {
                        "id": "nova-ff-tangie-mandarine",
                        "outOfStock": true, // Produit indisponible : aucune commande possible
                        "name": "Tangie Mandarine 🍊🌊",
                        "flag": "🇲🇦",
                        "farm": "NOVA ⭕️🔱 🫆",
                        "type": "Fresh Frozen 🧊",
                        "image": "ProductTM.png",
                        "video": "VideoTM.mp4",
                        "description": "Une Farmz 🧑‍🌾fabriqué avec un savoir faire 🔞hors du commun 💀😈un costume 🤵 sur mesure📏 tout et là l Élite du game.",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "2g",
                                "price": 30
                            },
                            {
                                "weight": "5g",
                                "price": 70
                            }
                        ]
                    },
                  /*   {
                        "id": "nova-ff-mimosa-max",
                        "name": "Mimosa Max 🍹🧊",
                        "flag": "🇲🇦",
                        "farm": "NOVA FARM",
                        "type": "Fresh Frozen",
                        "image": "ProductNM.png",
                        "video": "VideoNM.mov",
                        "description": "Une Farmz 🧑‍🌾fabriqué avec un savoir faire 🔞hors du commun 💀😈un costume 🤵 sur mesure📏 tout et là l Élite du game.",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "2g",
                                "price": 30
                            },
                            {
                                "weight": "5g",
                                "price": 70
                            }
                        ]
                    }, */
                    {
                        "id": "nova-ff-solero-lemon",
                                                "outOfStock": true, // Produit indisponible : aucune commande possible
                        "name": "Solero Lemon 🤠🍋",
                        "flag": "🇲🇦",
                        "farm": "NOVA ⭕️🔱 🫆",
                        "type": "Fresh Frozen 🧊",
                        "image": "ProductSL.png",
                        "video": "VideoSL.mp4",
                        "description": "Une Farmz 🧑‍🌾fabriqué avec un savoir faire 🔞hors du commun 💀😈un costume 🤵 sur mesure📏 tout et là l Élite du game.",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "2g",
                                "price": 30
                            },
                            {
                                "weight": "5g",
                                "price": 70
                            }
                        ]
                    },
                    {
                        "id": "nova-static-orange-runtz",
                        "name": "Orange Runtz 🍬🍊",
                        "flag": "🇲🇦",
                        "farm": "NOVA ⭕️🔱 🫆",
                        "type": "Double Static ⚡",
                        "image": "ProductOR.png",
                        "video": "VideoOR.mov",
                        "description": "Une Farmz 🧑‍🌾fabriqué avec un savoir faire 🔞hors du commun 💀😈un costume 🤵 sur mesure📏 tout et là l Élite du game.",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 20
                            },
                            {
                                "weight": "2g",
                                "price": 40
                            },
                            {
                                "weight": "5g",
                                "price": 100
                            }
                        ]
                    },
                    {
                        "id": "nova-static-mimosa-max",
                        "name": "Mimosa Max 🍹⚡",
                        "flag": "🇲🇦",
                        "farm": "NOVA ⭕️🔱 🫆",
                        "type": "Double Static ⚡",
                        "image": "ProductNM.png",
                        "video": "VideoNM.mov",
                        "description": "Une Farmz 🧑‍🌾fabriqué avec un savoir faire 🔞hors du commun 💀😈un costume 🤵 sur mesure📏 tout et là l Élite du game.",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 20
                            },
                            {
                                "weight": "2g",
                                "price": 40
                            },
                            {
                                "weight": "5g",
                                "price": 100
                            }
                        ]
                    }
                ]
            },
            {
                "id": "anonymuz",
                "name": "ANONYMUZ FARMZ 🧙🧞‍♂️",
                "icon": "🪐",
                "badgeText": "SS / FFS / 120µ • 8 références",
                "products": [
                    {
                        "id": "tropicali",
                        "name": "Tropicali 🌵",
                        "flag": "🇲🇦",
                        "farm": "ANONYMUZ FARMZ 🧙🧞‍♂️",
                        "type": "Sultan Static ⚡",
                        "image": "ProductTP.png",
                        "video": "VideoTP.mov",
                        "description": "",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "2g",
                                "price": 50
                            }
                        ]
                    },
                    {
                        "id": "Tangie",
                        "name": "Tangie 🍊",
                        "flag": "🇲🇦",
                        "farm": "ANONYMUZ FARMZ 🧙🧞‍♂️",
                        "type": "Sultan Static ⚡",
                        "image": "ProductTG.png",
                        "video": "VideoTG.mov",
                        "description": "",
                        "promoEligible": false,
                        "tarifs": [
                           {
                                "weight": "2g",
                                "price": 50
                            }
                        ]
                    },
                    {
                        "id": "anonymuz-tropicali",
                        "name": "Tropicali 🏝️🍹",
                        "flag": "🇲🇦",
                        "farm": "ANONYMUZ FARMZ 🧙🧞‍♂️",
                        "type": "Fresh Frozen 🧊",
                        "image": "ProductTI.png",
                        "video": "VideoTI.mov",
                        "description": "Laisser vous emporter par la magie d Anonymuz Hash Forger en enfer 🧞‍♂️🧞‍♀️conçu pour vous libérer du stress il apportera de la créativité 💭🤔vous amènera dans des moments d’euphorie🤯🤣 une sensation de liberté s installera en vous une agréable façon de se detendre et de se sentir léger dès la premier inhalation \n Pour les saveur c un régale pour les papilles 👅les strain son très représentatif de leur arômes unique conçu par un chef étoilé ⭐️🧑‍🍳10/10🏆 \n Je vous laisse déguste et découvrir la magie d Anonymuz par vous même 🧙👿 ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 20
                            },
                            {
                                "weight": "5g",
                                "price": 90
                            }
                        ]
                    },
                    {
                        "id": "anonymuz-tropic-guavana",
                        "name": "Tropic Guavana 🥭",
                        "outOfStock": true, // Produit indisponible : aucune commande possible
                        "flag": "🇲🇦",
                        "farm": "ANONYMUZ FARMZ 🧙🧞‍♂️",
                        "type": "Fresh Frozen 🧊",
                        "image": "ProductAN.png",
                        "video": "VideoAN.mov",
                        "description": "Laisser vous emporter par la magie d Anonymuz Hash Forger en enfer 🧞‍♂️🧞‍♀️conçu pour vous libérer du stress il apportera de la créativité 💭🤔vous amènera dans des moments d’euphorie🤯🤣 une sensation de liberté s installera en vous une agréable façon de se detendre et de se sentir léger dès la premier inhalation \n Pour les saveur c un régale pour les papilles 👅les strain son très représentatif de leur arômes unique conçu par un chef étoilé ⭐️🧑‍🍳10/10🏆 \n Je vous laisse déguste et découvrir la magie d Anonymuz par vous même 🧙👿 ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 20
                            },
                            {
                                "weight": "5g",
                                "price": 90
                            }
                        ]
                    },
                    {
                        "id": "anonymuz-tropic-cherry",
                        "name": "Tropic Cherry 🍒",
                        "flag": "🇲🇦",
                        "farm": "ANONYMUZ FARMZ 🧙🧞‍♂️",
                        "type": "Fresh Frozen 🧊",
                        "image": "ProductAN.png",
                        "video": "VideoAN.mov",
                        "description": "Laisser vous emporter par la magie d Anonymuz Hash Forger en enfer 🧞‍♂️🧞‍♀️conçu pour vous libérer du stress il apportera de la créativité 💭🤔vous amènera dans des moments d’euphorie🤯🤣 une sensation de liberté s installera en vous une agréable façon de se detendre et de se sentir léger dès la premier inhalation \n Pour les saveur c un régale pour les papilles 👅les strain son très représentatif de leur arômes unique conçu par un chef étoilé ⭐️🧑‍🍳10/10🏆 \n Je vous laisse déguste et découvrir la magie d Anonymuz par vous même 🧙👿 ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 20
                            },
                            {
                                "weight": "5g",
                                "price": 90
                            }
                        ]
                    },
                    {
                        "id": "anonymuz-white-tropicali",
                        "name": "White Tropicali 🍍",
                        "flag": "🇲🇦",
                        "farm": "ANONYMUZ FARMZ 🧙🧞‍♂️",
                        "type": "Fresh Frozen 🧊",
                        "image": "ProductAN.png",
                        "video": "VideoAN.mov",
                        "description": "Laisser vous emporter par la magie d Anonymuz Hash Forger en enfer 🧞‍♂️🧞‍♀️conçu pour vous libérer du stress il apportera de la créativité 💭🤔vous amènera dans des moments d’euphorie🤯🤣 une sensation de liberté s installera en vous une agréable façon de se detendre et de se sentir léger dès la premier inhalation \n Pour les saveur c un régale pour les papilles 👅les strain son très représentatif de leur arômes unique conçu par un chef étoilé ⭐️🧑‍🍳10/10🏆 \n Je vous laisse déguste et découvrir la magie d Anonymuz par vous même 🧙👿 ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 20
                            },
                            {
                                "weight": "5g",
                                "price": 90
                            }
                        ]
                    },
                    {
                        "id": "anonymuz-ice-cream-cake-grape-gas",
                        "name": "Ice Cream Cake X Grape Gas 🍧",
                        "flag": "🇲🇦",
                        "farm": "ANONYMUZ FARMZ 🧙🧞‍♂️",
                        "type": "120µ",
                        "image": "ProductIC.png",
                        "video": "VideoIC.mov",
                        "description": "Laisser vous emporter par la magie d Anonymuz Hash Forger en enfer 🧞‍♂️🧞‍♀️conçu pour vous libérer du stress il apportera de la créativité 💭🤔vous amènera dans des moments d’euphorie🤯🤣 une sensation de liberté s installera en vous une agréable façon de se detendre et de se sentir léger dès la premier inhalation \n Pour les saveur c un régale pour les papilles 👅les strain son très représentatif de leur arômes unique conçu par un chef étoilé ⭐️🧑‍🍳10/10🏆 \n Je vous laisse déguste et découvrir la magie d Anonymuz par vous même 🧙👿 ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "2g",
                                "price": 30
                            }
                        ]
                    },
                    {
                        "id": "anonymuz-Tropicali",
                        "name": "TropiCookies 🐲",
                        "flag": "🇲🇦",
                        "farm": "ANONYMUZ FARMZ 🧙🧞‍♂️",
                        "type": "120µ",
                        "image": "ProductTC.png",
                        "video": "VideoTC.mov",
                        "description": "Laisser vous emporter par la magie d Anonymuz Hash Forger en enfer 🧞‍♂️🧞‍♀️conçu pour vous libérer du stress il apportera de la créativité 💭🤔vous amènera dans des moments d’euphorie🤯🤣 une sensation de liberté s installera en vous une agréable façon de se detendre et de se sentir léger dès la premier inhalation \n Pour les saveur c un régale pour les papilles 👅les strain son très représentatif de leur arômes unique conçu par un chef étoilé ⭐️🧑‍🍳10/10🏆 \n Je vous laisse déguste et découvrir la magie d Anonymuz par vous même 🧙👿 ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "2g",
                                "price": 30
                            }
                        ]
                    }
                ]
            },
            {
                "id": "paradise-valley",
                "name": "PARADISE VALLEY 🇮🇹🇲🇦",
                "icon": "🌴",
                "badgeText": "Static Prime • 2 références",
                "products": [
                    {
                        "id": "paradise-pikachu-peach",
                        "outOfStock": true, 
                        "name": "Pikachu Peach ⚡🍑",
                        "flag": "🇮🇹",
                        "farm": "PARADISE VALLEY 🇮🇹🇲🇦",
                        "type": "Static Prime",
                        "image": "ProductPP.png",
                        "video": "VideoPP.mp4",
                        "description": "La Team une exclusivité Marocaine Paradise Valley un savoir faire unique avec des strain incroyable Qualités avant Quantité les amis.\n\n Arômes et saveurs 🧑‍🍳\n Notes sucrées, fruitées, d'agrumes et d'orange (riches en terpènes comme le limonène)\n Effets typiques 🧠🤯\n Énergisant, stimulant, humeur positive et créative",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 20
                            },
                            {
                                "weight": "5g",
                                "price": 100
                            }
                        ]
                    },
                    {
                        "id": "paradise-forbiden-tropic",
                        "name": "Forbiden Tropic 🍍",
                        "flag": "🇮🇹",
                        "farm": "PARADISE VALLEY 🇮🇹🇲🇦",
                        "type": "Static Prime",
                        "image": "ProductPP.png",
                        "video": "VideoPP.mp4",
                        "description": "La Team une exclusivité Marocaine Paradise Valley un savoir faire unique avec des strain incroyable Qualités avant Quantité les amis.\n\n Arômes et saveurs 🧑‍🍳\n Notes sucrées, fruitées, d'agrumes et d'orange (riches en terpènes comme le limonène)\n Effets typiques 🧠🤯\n Énergisant, stimulant, humeur positive et créative",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 20
                            },
                            {
                                "weight": "5g",
                                "price": 100
                            }
                        ]
                    }
                ]
            },
            {
                "id": "smuggler",
                "name": "SMUGGLER FARM 🧨",
                "icon": "🍬",
                "badgeText": "Frozen • 1 référence",
                "products": [
                    {
                        "id": "smuggler-calippo-x-ff",
                        "name": "Calippo X ff ❄️",
                        "flag": "🍬",
                        "farm": "SMUGGLER 🧨",
                        "type": "Frozen",
                        "image": "ProductSM.png",
                        "video": "VideoSM.mov",
                        "description": "Cette Farms fait partie de l élite du Game 🎮 du vrai Frozen avec des strain très représentatifs 10/10 👅\n Qualité du produit et remarquable Forget en enfer 🔥vrai sucrerie 🍬 ramène tout droit des enfers",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 20
                            },
                            {
                                "weight": "5g",
                                "price": 100
                            }
                        ]
                    }
                ]
            },
            {
                "id": "quality-can-you-taste",
                "name": "QUALITY CAN YOU TASTE 🇺🇸",
                "icon": "🇺🇸",
                "badgeText": "Static • 1 référence",
                "products": [
                    {
                        "id": "quality-berry-white",
                        "name": "Berry White 🍓",
                        "flag": "🇺🇸",
                        "farm": "QUALITY CAN YOU TASTE 🇺🇸",
                        "type": "Static",
                        "image": "ProductBW.png",
                        "video": "VideoBW.mov",
                        "description": "La Team produit d exception💎 une saveur🧑‍🍳 particulièrement unique pour les papilles Une des meilleur Farms us 🇺🇸 pas peur de le dire c est le Produit🧈 qui parle à ma place‼️🏆. \n Du vrai Caramel beurre salé 🧈",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 30
                            }
                        ]
                    }
                ]
            },
            {
                "id": "liquid-farm",
                "name": "LIQUID FARM 🔱🇺🇸🥷",
                "icon": "🇺🇸",
                "badgeText": "Wpff • 3 références",
                "products": [
                    {
                        "id": "liquid-Gas Light 💡",
                        "name": "Gas Light 💡",
                        "flag": "🇺🇸",
                        "farm": "LIQUID 🔱🇺🇸🥷",
                        "type": "Wpff",
                        "image": "ProductGL.png",
                        "video": "VideoGL.mov",
                        "description": "Nouveau Drop Liquid Farms Wpff🔱🇺🇸🥷\n Un Wpff rincé par un expert pour vous faire le meilleur Wpff possible c est du beurre 🧈 tout simplement les amis après inhalation les effets son magique 🧙 vous passerez un agréable moment sur votre petit nuage ☁️ qui vous transportera sur L.A🇺🇸.\n Le Produit qui parle à ma place ‼️\n Rapport Qualité Prix 🥇 \n Quantité Limité ⚠️ ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 30
                            }
                        ]
                    },
                    {
                        "id": "liquid-papaya",
                        "name": "Papaya 🥭",
                        "flag": "🇺🇸",
                        "farm": "LIQUID 🔱🇺🇸🥷",
                        "type": "Wpff",
                        "image": "ProductP.png",
                        "video": "VideoP.mov",
                        "description": "Nouveau Drop Liquid Farms Wpff🔱🇺🇸🥷\n Un Wpff rincé par un expert pour vous faire le meilleur Wpff possible c est du beurre 🧈 tout simplement les amis après inhalation les effets son magique 🧙 vous passerez un agréable moment sur votre petit nuage ☁️ qui vous transportera sur L.A🇺🇸.\n Le Produit qui parle à ma place ‼️\n Rapport Qualité Prix 🥇 \n Quantité Limité ⚠️ ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 30
                            }
                        ]
                    },
                    {
                        "id": "liquid-paplato",
                        "name": "Paplato 🍰",
                        "flag": "🇺🇸",
                        "farm": "LIQUID 🔱🇺🇸🥷",
                        "type": "Wpff",
                        "image": "ProductPL.png",
                        "video": "VideoPL.mov",
                        "description": "Nouveau Drop Liquid Farms Wpff🔱🇺🇸🥷\n Un Wpff rincé par un expert pour vous faire le meilleur Wpff possible c est du beurre 🧈 tout simplement les amis après inhalation les effets son magique 🧙 vous passerez un agréable moment sur votre petit nuage ☁️ qui vous transportera sur L.A🇺🇸.\n Le Produit qui parle à ma place ‼️\n Rapport Qualité Prix 🥇 \n Quantité Limité ⚠️ ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 30
                            }
                        ]
                    }
                ]
            },
            {
                "id": "staticroom",
                "name": "STATICROOM 🧤🫆💗",
                "icon": "🇺🇸",
                "badgeText": "Static • 2 références",
                "products": [
                    {
                        "id": "staticroom-white-runtz",
                        "name": "White Runtz🌴🍦",
                        "flag": "🇺🇸",
                        "farm": "Static Room 🧤🫆💗",
                        "type": "Static",
                        "image": "ProductWR.png",
                        "video": "VideoWR.mov",
                        "description": "Static Room est une marque ou un producteur artisanal de concentrés de cannabis (notamment présent sur le marché légal de l'État de New York). Lorsque l'on associe White Runtz à Static Room, il s'agit généralement de leur Static Sift Hash ou de leurs collaborations pour des produits d'exception comme des hash holes (joints pré-roulés infusés au hash\n La technique du \"Static Sift\" par Static Room Le terme \"Static\" fait référence à la méthode d'extraction utilisée : le static tech ou tamisage électrostatique.\n Le principe : Cette méthode post-traitement utilise l'électricité statique (généralement à l'aide de gants ou de rouleaux spécifiques) pour séparer les têtes des trichomes (glandes de résine pures) de tous les débris végétaux restants (Feuilles, tiges pulvérisées\n Le résultat : On obtient un hash d'une pureté extrême (souvent estimée entre 85% et 95% de têtes de trichomes intactes), qui fond complètement à la chaleur (full melt) et offre une clarté de saveur inégalée.[1]\n Le profil de la variété White Runtz White Runtz est l'une des génétiques hybrides les plus populaires et les plus adaptées à ce type de concentré haut de gamme.\n Génétique : Un croisement californien mythique entre la Zkittlez et la Gelato.\n Arômes : Une saveur extrêmement fruitée, sucrée, tropicale, évoquant des bonbons aux agrumes et aux baies acidulées.\n Effets : Très équilibrée mais puissant Il procure d'abord une vague d'euphorie et de créativité cérébrale avant de basculer vers une relaxation physique intense et chaleureuse sans pour autant provoquer un effet de lourdeur totale Les concentrés élaborés par Static Room à partir de la White Runtz sont particulièrement recherchés par les connaisseurs pour leur capacité à restituer fidèlement et intensément ce profil de terpènes très sucrés 🍦 ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 60
                            }
                        ]
                    },
                    {
                        "id": "staticroom-cereal-milk",
                        "name": "Cereal milk 🥛🍪",
                        "flag": "🇺🇸",
                        "farm": "Static Room 🧤🫆💗",
                        "type": "Static",
                        "image": "ProductCM.png",
                        "video": "VideoCM.mov",
                        "description": "Static Room est une marque ou un producteur artisanal de concentrés de cannabis (notamment présent sur le marché légal de l'État de New York). Lorsque l'on associe White Runtz à Static Room, il s'agit généralement de leur Static Sift Hash ou de leurs collaborations pour des produits d'exception comme des hash holes (joints pré-roulés infusés au hash\n La technique du \"Static Sift\" par Static Room Le terme \"Static\" fait référence à la méthode d'extraction utilisée : le static tech ou tamisage électrostatique.\n Le principe : Cette méthode post-traitement utilise l'électricité statique (généralement à l'aide de gants ou de rouleaux spécifiques) pour séparer les têtes des trichomes (glandes de résine pures) de tous les débris végétaux restants (Feuilles, tiges pulvérisées\n Le résultat : On obtient un hash d'une pureté extrême (souvent estimée entre 85% et 95% de têtes de trichomes intactes), qui fond complètement à la chaleur (full melt) et offre une clarté de saveur inégalée.[1]\n Le profil de la variété White Runtz White Runtz est l'une des génétiques hybrides les plus populaires et les plus adaptées à ce type de concentré haut de gamme.\n Génétique : Un croisement californien mythique entre la Zkittlez et la Gelato.\n Arômes : Une saveur extrêmement fruitée, sucrée, tropicale, évoquant des bonbons aux agrumes et aux baies acidulées.\n Effets : Très équilibrée mais puissant Il procure d'abord une vague d'euphorie et de créativité cérébrale avant de basculer vers une relaxation physique intense et chaleureuse sans pour autant provoquer un effet de lourdeur totale Les concentrés élaborés par Static Room à partir de la White Runtz sont particulièrement recherchés par les connaisseurs pour leur capacité à restituer fidèlement et intensément ce profil de terpènes très sucrés 🍦 ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 60
                            }
                        ]
                    }
                ]
            },
            {
                "id": "humboldt",
                "name": "HUMBOLDT 🥇⚠️",
                "icon": "🇺🇸",
                "badgeText": "Static • 3 références",
                "products": [
                    {
                        "id": "humboldt-grape-gas",
                        "name": "GRAPE GAS 🍇⛽",
                        "flag": "🇺🇸",
                        "farm": "Humboldt Hash 🥇⚠️",
                        "type": "Static",
                        "image": "ProductGG.png",
                        "video": "VideoGG.mp4",
                        "description": "Sélection Static Premium · HUMBOLDT 🚀",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 60
                            }
                        ]
                    },
                    {
                        "id": "humboldt-red-bull",
                        "name": "RED BULL 🥤🤯",
                        "flag": "🇺🇸",
                        "farm": "Humboldt Hash 🥇⚠️",
                        "type": "Static",
                        "image": "ProductRB.png",
                        "video": "VideoRB.mov",
                        "description": "Strain⬇️Static WHOLEPANT🚀\n Humboldt : Fait référence au comté de Humboldt en Californie, une région mondialement célèbre pour sa culture de cannabis de haute qualité (souvent associée à des banques de graines comme la Humboldt Seed Company\n\n SAVEUR ET ARÔME🧑‍🍳\n Si vous appréciez l'alliance de saveurs et d'arômes variés et distincts, Red Bull pourrait bien devenir votre nouvelle variété favorite. Son profil aromatique suffit à susciter la curiosité, mêlant des notes puissantes, herbacées et acides à des effluves rappelant la « skunk » et le citron.\n Dès la première bouffée, une véritable explosion de saveurs se produit en bouche. Vous percevrez immédiatement le goût du citron, accompagné des mêmes nuances herbacées, acides et typées « skunk » décelées à l'odeur. Une pointe d'épices vient également enrichir ce profil gustatif déjà complexe.\n\n EFFETS RED BULL 🥤🤯\n Sensation d'élévation✈️\n Concentration🧠\n Détente💆\n Red Bull confirme bien son caractère. Dès que les effets se manifestent, vous ressentez une détente palpable, suffisante pour apaiser un esprit préoccupé. Il procure également une euphorie notable, capable de dissiper la mauvaise humeur accumulée après une journée de travail difficile.\n Cependant, comme nous l'avons évoqué précédemment, Red Bull a aussi la capacité d'améliorer votre concentration, voire de stimuler votre créativité. Ces caractéristiques témoignent de la polyvalence de cette variété : vous pouvez l'utiliser aussi bien en travaillant la journée qu'en soirée, pour vous détendre avant de passer à la nuit.",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 60
                            }
                        ]
                    },
                    {
                        "id": "humboldt-purple-dream",
                        "name": "PURPLE DREAM ☂️",
                        "flag": "🇺🇸",
                        "farm": "Humboldt Hash 🥇⚠️",
                        "type": "Static",
                        "image": "ProductPD.png",
                        "video": "VideoPD.mov",
                        "description": "Sélection Static Premium · HUMBOLDT 🚀",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "1g",
                                "price": 60
                            }
                        ]
                    }
                ]
            },
            {
                "id": "sifty-kreme",
                "name": "SIFTY KREME ☄️🔥🇺🇸",
                "icon": "🇺🇸",
                "badgeText": "Mix • 1 référence",
                "products": [
                    {
                        "id": "sifty-five-strains",
                        "name": "Mix 5 Strains 💠",
                        "flag": "🇺🇸",
                        "farm": "SIFTY KREME ☄️🔥🇺🇸",
                        "type": "Mix",
                        "image": "Product5S.png",
                        "videos":[ "Video5S.mp4", "Video5S2.mov"],
                        "description": `Whole Plante Static 
Strain✅⬇️
Pie Hoe🔥
Banana Punch🍌
Trop Cherry🍒
Papaya🥭
Super buff Cherry🍒🔥
Produit Rare💠
La Team on vous présente une fusion explosive un changement de couleur 👀
5 strain réunie en 1 pour vous faire déguste les meilleure saveur et meilleur sensation possible exclusivité 
Quantité Limité ⚠️
Les meilleurs h du monde 🌎🧤🏆`,
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "5g",
                                "price": 350
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "Fleure Californienne",
        "name": "Fleure Californienne",
        "quality": "Fleure Californienne",
        "image": "Original68_Fond.jpg",
        "icon": "🌿",
        "productCount": 2,
        "farmCount": 1,
        "farms": [
            {
                "id": "cali-topshelf",
                "name": "CALI TOPSHELF BAGS 🎒",
                "icon": "🇺🇸",
                "badgeText": "Bags • 2 références",
                "products": [
                    {
                        "id": "cali-bolo-runtz",
                        "name": "Bolo Runtz 🌸",
                        "flag": "🇺🇸",
                        "farm": "CALI TOPSHELF BAGS 🎒",
                        "type": "Bags",
                        "image": "ProductBR.png",
                        "video": "VideoBR.mp4",
                        "description": "Fleur 🌸 californienne \n Top shelf bags de la farm Trapnumberz 🔢🍭\n 2 goût incroyable a votre disposition la Bolo runtz et la Melted cherries. 🧨🥳\n Elle vous laissera un goût en bouche sucrer 🍭 et bien us 🇺🇸 \n Goût et défonce 10/10 🙌🏆 ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "3.5g",
                                "price": 80
                            }
                        ]
                    },
                    {
                        "id": "cali-melted-cherries",
                        "name": "Melted Cherries 🍒",
                        "flag": "🇺🇸",
                        "farm": "CALI TOPSHELF BAGS 🎒",
                        "type": "Bags",
                        "image": "ProductMC.png",
                        "video": "VideoMC.mov",
                        "description": "Fleur 🌸 californienne \n Top shelf bags de la farm Trapnumberz 🔢🍭\n 2 goût incroyable a votre disposition la Bolo runtz et la Melted cherries. 🧨🥳\n Elle vous laissera un goût en bouche sucrer 🍭 et bien us 🇺🇸 \n Goût et défonce 10/10 🙌🏆 ",
                        "promoEligible": false,
                        "tarifs": [
                            {
                                "weight": "3.5g",
                                "price": 80
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

    // Logos des farms dans les sous-catégories HASH et WEED.
    // Les 5 derniers logos sont découpés directement dans le menu fourni.
    const farmLogoImages = {
        'no-farm': 'logos-farms/FarmNoFarm.png',
        'golden-drytech': 'logos-farms/FarmGoldenDrytech.png',
        'nova-farm': 'logos-farms/FarmNova.png',
        'anonymuz': 'logos-farms/FarmAnonymuz.png',
        'paradise-valley': 'logos-farms/FarmParadiseValley.png',
        'smuggler': 'logos-farms/FarmSmuggler.png',
        'quality-can-you-taste': 'logos-farms/FarmQualityCanYouTaste.png',
        'liquid-farm': 'logos-farms/FarmLiquidFarm.png',
        'staticroom': 'logos-farms/FarmStaticroom.png',
        'humboldt': 'logos-farms/FarmHumboldt.png',
        'sifty-kreme': 'logos-farms/FarmSiftyKreme.png',
        'cali-topshelf': 'logos-farms/FarmCaliTopshelf.png'
    };
    function farmMonogram(name) {
        const parts = name.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean);
        return parts.slice(0,2).map(p=>p[0]).join('').toUpperCase() || '68';
    }

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = { searchTerm: '', quality: 'all', type: 'all' };
    
    // NAVIGATION ETAT (Logique Pistachio)
    let currentView = 'discovery'; // 'categories', 'farms' (sous-cat), 'simple_products' (direct), 'products' (via farm)
    let currentCategoryId = null;
    let currentFarmId = null;
    let appliedPromo = null;
    let paymentMethod = 'Espèce';

    const validPromoCodes = {
        
    };

    // --- SÉLECTEURS ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const filterContainer = document.querySelector('.filters');
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const typeFilterWrapper = document.getElementById('farm-filter').parentElement;

    const escapeHtml = (v) => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&#39;'}[c]));

    // Accueil façon mini-app de la vidéo : farms d'abord, catalogue en sections ensuite.
    let discoveryCategory = 'ALL';
    let discoveryFarm = 'ALL';
    let discoverySearch = '';
    let discoverySort = 'default';
    let discoveryAvailableOnly = false;
    const discoveryAllFarms = appData.flatMap(category =>
        (category.farms || []).map(farm => ({ ...farm, categoryId:category.id })));
    const discoveryAllProducts = discoveryAllFarms.flatMap(farm =>
        (farm.products || []).map(product => ({ product, farm })));
    const discoveryLogos = (farm) => farmLogoImages[farm.id] || '';
    const discoveryFarmVisual = (farm, extraClass = '') => {
        const url = discoveryLogos(farm);
        return url ? `<img class="${extraClass}" src="${escapeHtml(url)}" alt="" loading="lazy" onerror="this.hidden=true">`
            : `<span class="o68-farm-placeholder ${extraClass}">${escapeHtml(farmMonogram(farm.name))}</span>`;
    };
    // Animations de révélation au scroll (réduites si demandé par l’utilisateur).
    let o68RevealObserver = null;
    const o68ReduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function animateVisibleDiscovery() {
        if (o68RevealObserver) { o68RevealObserver.disconnect(); o68RevealObserver = null; }
        const list = document.querySelector('#page-home #product-list');
        if (!list) return;
        const els = [...list.querySelectorAll('.o68-farm-group-heading, .o68-product-card')];
        if (o68ReduceMotion || !('IntersectionObserver' in window)) return;
        o68RevealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('o68-is-visible');
                    o68RevealObserver?.unobserve(entry.target);
                }
            });
        }, { threshold: 0.09, rootMargin: '0px 0px -5% 0px' });
        let cardIndex = 0;
        els.forEach(el => {
            const heading = el.classList.contains('o68-farm-group-heading');
            if (heading) cardIndex=0;
            el.style.setProperty('--o68-reveal-delay', heading ? '0ms' : `${(cardIndex++ % 4) * 70}ms`);
            el.classList.add('o68-will-reveal');
            o68RevealObserver.observe(el);
        });
    }

    function renderDiscovery() {
        const totalProducts = discoveryAllProducts.length;
        document.getElementById('o68-stat-products').textContent = totalProducts;
        document.getElementById('o68-stat-farms').textContent = discoveryAllFarms.length;
        const categoryTabs = document.getElementById('o68-category-tabs');
        const categories = [{id:'ALL',name:'TOUT'}, ...appData.map(category => ({id:category.id, name:category.name}))];
        categoryTabs.innerHTML = categories.map(c => `<button type="button" class="o68-category-tab ${c.id === discoveryCategory ? 'active' : ''}" data-discovery-category="${escapeHtml(c.id)}" aria-pressed="${c.id === discoveryCategory}">${c.id === 'ALL' ? '✦' : c.id === 'WEED' ? '◈' : '◆'} ${escapeHtml(c.name.length > 15 ? (c.name.toLowerCase().includes('californ') ? 'FLEURS CALI' : c.name.split(' ')[0]) : c.name)}</button>`).join('');
        const filteredFarms = discoveryAllFarms.filter(f => discoveryCategory === 'ALL' || f.categoryId === discoveryCategory);
        if (discoveryFarm !== 'ALL' && !filteredFarms.some(f => f.id === discoveryFarm)) discoveryFarm = 'ALL';
        document.getElementById('o68-farm-count').textContent = `${filteredFarms.length} farms`;
        document.getElementById('o68-farm-strip').innerHTML = [
            `<button type="button" class="o68-farm-card ${discoveryFarm === 'ALL' ? 'active' : ''}" data-discovery-farm="ALL" aria-pressed="${discoveryFarm === 'ALL'}"><span class="o68-farm-placeholder">✦</span><strong>TOUTES LES FARMS</strong><small>Voir tout</small></button>`,
            ...filteredFarms.map(f => `<button type="button" class="o68-farm-card ${discoveryFarm === f.id ? 'active' : ''}" data-discovery-farm="${escapeHtml(f.id)}" aria-pressed="${discoveryFarm === f.id}">${discoveryFarmVisual(f)}<strong>${escapeHtml(f.name)}</strong><small>${f.products.length} réf.</small></button>`)
        ].join('');
        const search = discoverySearch.toLocaleLowerCase('fr-FR');
        const groups = filteredFarms.filter(f => discoveryFarm === 'ALL' || f.id === discoveryFarm).map(farm => {
            let products = farm.products.filter(p => {
                if (discoveryAvailableOnly && p.outOfStock) return false;
                const haystack = `${p.name} ${p.type} ${p.farm} ${farm.name}`.toLocaleLowerCase('fr-FR');
                return !search || haystack.includes(search);
            });
            if (discoverySort !== 'default') products = [...products].sort((a,b) => {
                const pa = Math.min(...a.tarifs.map(t => Number(t.price)));
                const pb = Math.min(...b.tarifs.map(t => Number(t.price)));
                if (discoverySort === 'price-asc') return pa - pb;
                if (discoverySort === 'price-desc') return pb - pa;
                return a.name.localeCompare(b.name,'fr');
            });
            return {farm, products};
        }).filter(g => g.products.length);
        const count = groups.reduce((n,g) => n + g.products.length,0);
        document.getElementById('o68-results-count').textContent = `${count} résultat${count>1?'s':''}`;
        const target = document.getElementById('product-list');
        if (!groups.length) { target.innerHTML = '<div class="o68-empty">Aucun produit trouvé. Modifie les filtres pour revoir le catalogue.</div>'; return; }
        target.innerHTML = groups.map(({farm,products}) => {
            const heading = `<div class="o68-farm-group-heading">${discoveryFarmVisual(farm)}<strong>${escapeHtml(farm.name)}</strong><small>${products.length} produit${products.length>1?'s':''}</small></div>`;
            const cards = products.map(product => {
                const minPrice = Math.min(...product.tarifs.map(t=>Number(t.price)));
                const out = Boolean(product.outOfStock);
                return `<article class="o68-product-card product-item-card" data-product-id="${escapeHtml(product.id)}" role="button" tabindex="0" aria-label="Voir ${escapeHtml(product.name)}">
                    <div class="o68-product-media"><img src="${escapeHtml(product.image||'Original68_Logo.jpg')}" alt="${escapeHtml(product.name)}" loading="lazy" onerror="this.onerror=null;this.src='Original68_Logo.jpg'">
                        <span class="o68-product-badge ${out?'o68-sold-out':''}">${out?'INDISPONIBLE':'✦ SÉLECTION'}</span>
                    </div>
                    <div class="o68-product-body"><span class="o68-product-type">${escapeHtml(product.type||'Sélection')}</span><strong class="o68-product-title">${escapeHtml(product.name)}</strong>
                        <div class="o68-product-farm">${escapeHtml(farm.name)}</div>
                        <div class="o68-product-bottom"><strong class="o68-price ${out?'o68-sold-out-price':''}">${out?'RUPTURE':`Dès ${minPrice.toFixed(0)} €`}</strong><span class="o68-detail-btn">Voir ›</span></div>
                    </div>
                </article>`;
            }).join('');
            return heading + cards;
        }).join('');
        animateVisibleDiscovery();
    }

    function setupDiscoveryControls() {
        document.getElementById('o68-category-tabs').addEventListener('click',e=>{
            const btn=e.target.closest('[data-discovery-category]'); if(!btn)return;
            discoveryCategory=btn.dataset.discoveryCategory; discoveryFarm='ALL'; renderDiscovery();
        });
        document.getElementById('o68-farm-strip').addEventListener('click',e=>{
            const btn=e.target.closest('[data-discovery-farm]'); if(!btn)return;
            discoveryFarm=btn.dataset.discoveryFarm;renderDiscovery();
            document.querySelector('.o68-products-heading')?.scrollIntoView({behavior:'smooth',block:'start'});
        });
        const search=document.getElementById('o68-search');
        search.addEventListener('input',e=>{discoverySearch=e.target.value;document.getElementById('o68-clear-search').hidden=!discoverySearch;renderDiscovery();});
        document.getElementById('o68-clear-search').addEventListener('click',()=>{discoverySearch='';search.value='';document.getElementById('o68-clear-search').hidden=true;renderDiscovery();search.focus();});
        document.getElementById('o68-sort').addEventListener('change',e=>{discoverySort=e.target.value;renderDiscovery();});
        document.getElementById('o68-in-stock').addEventListener('change',e=>{discoveryAvailableOnly=e.target.checked;renderDiscovery();});
        document.getElementById('nav-farms').addEventListener('click',()=>{currentView='discovery';showPage('page-home');renderDiscovery();document.getElementById('o68-farm-strip').scrollIntoView({behavior:'smooth',block:'center'});});
        document.getElementById('product-list').addEventListener('keydown',e=>{
            const card=e.target.closest('.product-item-card');
            if (card && (e.key==='Enter'||e.key===' ')){e.preventDefault();renderProductPage(card.dataset.productId);}
        });
    }

    // Musique West Coast instrumentale originale. Le son démarre uniquement après un clic.
    function setupWestCoastPlayer() {
        const tracks=[{title:'Pacific Sunset · G-Funk',src:'music/Pacific_Sunset.mp3'},{title:'Lowrider Boulevard · West Coast',src:'music/Lowrider_Boulevard.mp3'}];
        const audio=document.getElementById('o68-audio');
        const panel=document.getElementById('o68-music-panel');
        const fab=document.getElementById('o68-music-fab');
        const play=document.getElementById('o68-music-play');
        const title=document.getElementById('o68-track-title');
        let active=0;
        audio.volume=.35;
        function setTrack(i,keepPlaying=false){active=(i+tracks.length)%tracks.length;audio.src=tracks[active].src;title.textContent=tracks[active].title;if(keepPlaying)audio.play().catch(()=>{});}
        function sync(){play.textContent=audio.paused?'▶':'❚❚';play.setAttribute('aria-label',audio.paused?'Lancer la musique':'Mettre en pause');document.getElementById('o68-playing-indicator').hidden=audio.paused;}
        fab.addEventListener('click',()=>{panel.hidden=!panel.hidden;fab.setAttribute('aria-expanded',String(!panel.hidden));});
        document.getElementById('o68-music-close').addEventListener('click',()=>{panel.hidden=true;fab.setAttribute('aria-expanded','false');});
        play.addEventListener('click',()=>{if(audio.paused){audio.play().catch(()=>{title.textContent='Son indisponible · vérifie le dossier music';});}else audio.pause();});
        document.getElementById('o68-music-next').addEventListener('click',()=>setTrack(active+1,!audio.paused));
        document.getElementById('o68-music-prev').addEventListener('click',()=>setTrack(active-1,!audio.paused));
        document.getElementById('o68-music-volume').addEventListener('input',e=>{audio.volume=Number(e.target.value)/100;});
        document.querySelector('#page-product .product-video')?.addEventListener('play',()=>audio.pause());
        audio.addEventListener('play',sync);audio.addEventListener('pause',sync);audio.addEventListener('error',()=>{if(!audio.getAttribute('src'))return;title.textContent='Fichier MP3 absent · dossier music';});
        setTrack(0);sync();
    }


    function getProductById(productId) {
        for (const category of appData) {
            if (category.products) {
                const product = category.products.find(p => p.id === productId);
                if (product) return product;
            }
            if (category.farms) {
                for (const farm of category.farms) {
                    const product = farm.products.find(p => p.id === productId);
                    if (product) return product;
                }
            }
        }
        return undefined;
    }

    function showPage(pageId) {
        if (pageId !== 'page-product') document.querySelector('#page-product .product-video')?.pause();
        pages.forEach(p => p.classList.remove('active'));
        const page = document.getElementById(pageId);
        if (page) page.classList.add('active');

        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info');
        const contactNav = document.getElementById('nav-contact');

        if(homeNav) homeNav.classList.remove('active');
        if(infoNav) infoNav.classList.remove('active');
        if(contactNav) contactNav.classList.remove('active');
        document.getElementById('nav-cart')?.classList.remove('active');

        if (pageId === 'page-contact') contactNav.classList.add('active');
        else if (pageId === 'page-info') infoNav.classList.add('active');
        else if (pageId === 'page-cart' || pageId === 'page-confirmation') document.getElementById('nav-cart')?.classList.add('active');
        else homeNav.classList.add('active');
    }

    // --- RENDER HOME (Logique Pistachio adaptée) ---
    function renderHomePage() {
        if (currentView === 'discovery') { renderDiscovery(); return; }
        filterContainer.style.display = 'flex';

        // Nettoyage boutons retour
        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();

        // 1. Vue CATÉGORIES (Racine)
        if (currentView === 'categories') {
            renderCategoryList();
            searchFilterWrapper.style.display = 'none';
            typeFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        // 2. Vue SOUS-CATÉGORIES (Liste Farms)
        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId); // Affiche la liste Frozen/Static...
            searchFilterWrapper.style.display = 'none';
            typeFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; // Liste verticale

            // Bouton Retour
            const category = appData.find(c => c.id === currentCategoryId);
            createBackButton('back-to-categories-btn', category.name);

        // 3. Vue PRODUITS DIRECTS (ex: Edibles)
        } else if (currentView === 'simple_products') {
            renderProductListSimple(currentCategoryId);
            searchFilterWrapper.style.display = 'flex';
            typeFilterWrapper.style.display = 'flex';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            createBackButton('back-to-categories-btn', category.name);

        // 4. Vue PRODUITS VIA SOUS-CAT (ex: Hash -> Frozen -> Produits)
        } else if (currentView === 'products') {
            renderProductList(currentCategoryId, currentFarmId);
            searchFilterWrapper.style.display = 'flex';
            typeFilterWrapper.style.display = 'flex';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            const farm = category.farms.find(f => f.id === currentFarmId);
            createBackButton('back-to-farms-btn', farm.name);
        }
    }

    function createBackButton(className, text) {
        const backButton = document.createElement('button');
        backButton.className = className;
        backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${text}`;
        // Style inline pour correspondre à ton design
        backButton.style.cssText = `
            background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid #b97cff;
            border-top: none; border-left: none; border-right: none;
            color: white; padding: 10px 15px; 
            border-radius: 10px; font-size: 1.1rem; 
            font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;
        `;
        filterContainer.prepend(backButton);
    }

   // --- MODIFIÉ : renderCategoryList (CORRIGÉ POUR LE SELECT) ---
   function renderCategoryList() {
    const filteredCategories = appData.filter(category => {
        // 1. Filtre Recherche (Barre de texte)
        const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        
        // 2. Filtre Dropdown (Le Select "Qualité") - C'est cette ligne qui manquait !
        const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
        
        // On retourne VRAI seulement si les deux conditions sont remplies
        return searchMatch && qualityMatch;
    });

    productListContainer.innerHTML = '';
    
    if (filteredCategories.length === 0) {
        // Message si on filtre et qu'il n'y a rien
        productListContainer.innerHTML = '<p class="no-results" style="grid-column: 1/-1; text-align: center; padding: 20px; color: #888;">Aucune catégorie ne correspond.</p>';
        return;
    }

    filteredCategories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.dataset.categoryId = category.id;
        // On garde ton affichage image
        card.innerHTML = `
            <img src="${category.image}" alt="" loading="lazy">
            <div class="original68-farm-banner">
                <span class="farm-banner-icon">${category.icon || '💜'}</span>
                <div class="farm-banner-name">${escapeHtml(category.name)}</div>
                <span class="farm-banner-sub">${category.productCount} référence${category.productCount > 1 ? 's' : ''} • ${category.farmCount} farm${category.farmCount > 1 ? "s" : ""}</span>
            </div>`;
        productListContainer.appendChild(card);
    });
}

    // --- RENDER SOUS-CATÉGORIES (LISTE STYLE PISTACHIO) ---
    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) return;

        const farms = category.farms;
        productListContainer.style.gridTemplateColumns = '1fr'; // Liste verticale
        productListContainer.style.gap = '10px'; 
        productListContainer.innerHTML = '';

        farms.forEach(farm => {
            const btn = document.createElement('div');
            btn.className = 'farm-list-btn'; // Utilise le CSS ajouté
            btn.dataset.farmId = farm.id;

            const productCount = farm.products.length;
            const countText = productCount > 0 ? `${productCount} prod.` : '';
            const farmLogoPath = farmLogoImages[farm.id];
            const farmVisual = farmLogoPath
                ? `<img class="farm-btn-logo" src="${farmLogoPath}" alt="Logo ${escapeHtml(farm.name)}" loading="lazy">`
                : `<span class="farm-btn-logo farm-btn-logo-fallback" aria-hidden="true">${escapeHtml(farmMonogram(farm.name))}</span>`;

            btn.innerHTML = `
            <div class="farm-btn-left">
                ${farmVisual}
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${escapeHtml(farm.name)}</span>
                    <span class="farm-btn-subtitle">${escapeHtml(farm.badgeText || countText)}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>`;
            productListContainer.appendChild(btn);
        });
    }

    // --- TYPES DE PRODUITS : regroupement automatique dans chaque farm ---
    // Les libellés sont ceux indiqués dans product.type (y compris les emojis).
    function groupProductsByType(products) {
        const groups = new Map();
        products.forEach(product => {
            const type = String(product.type || 'Autres').trim() || 'Autres';
            if (!groups.has(type)) groups.set(type, []);
            groups.get(type).push(product);
        });
        return groups;
    }

    // Le sélecteur existant #farm-filter devient un filtre de TYPE,
    // sans changer l'emplacement du sélecteur dans l'ancienne interface.
    function updateTypeSelect(products) {
        const typeSelect = document.getElementById('farm-filter');
        if (!typeSelect) return;
        const groups = groupProductsByType(products);
        if (currentFilters.type !== 'all' && !groups.has(currentFilters.type)) {
            currentFilters.type = 'all';
        }

        typeSelect.replaceChildren();
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = `🔎 TOUS LES TYPES (${products.length})`;
        typeSelect.appendChild(allOption);
        groups.forEach((items, type) => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = `${type} (${items.length})`;
            typeSelect.appendChild(option);
        });
        typeSelect.value = currentFilters.type;
    }

    function renderGroupedProducts(products) {
        productListContainer.innerHTML = '';
        if (!products.length) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit pour ce type.</p>';
            return;
        }

        groupProductsByType(products).forEach((items, type) => {
            const heading = document.createElement('div');
            heading.className = 'original68-type-heading';
            heading.innerHTML = `
                <span class="original68-type-name">${escapeHtml(type)}</span>
                <span class="original68-type-count">${items.length} produit${items.length > 1 ? 's' : ''}</span>`;
            productListContainer.appendChild(heading);
            renderProductCards(items);
        });
    }

    // Produits directs éventuels : même comportement que les farms.
    function renderProductListSimple(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category || !category.products) return;
        updateTypeSelect(category.products);
        const term = currentFilters.searchTerm.trim().toLocaleLowerCase('fr-FR');
        const filteredProducts = category.products.filter(product => {
            const matchesType = currentFilters.type === 'all' || String(product.type || 'Autres').trim() === currentFilters.type;
            const matchesSearch = !term || product.name.toLocaleLowerCase('fr-FR').includes(term) ||
                String(product.type || '').toLocaleLowerCase('fr-FR').includes(term);
            return matchesType && matchesSearch;
        });
        renderGroupedProducts(filteredProducts);
    }

    // À l'ouverture d'une farm : afficher Frozen / Static / etc. en sections distinctes.
    function renderProductList(categoryId, farmId) {
        const category = appData.find(c => c.id === categoryId);
        const farm = category?.farms?.find(f => f.id === farmId);
        if (!farm) return;
        updateTypeSelect(farm.products);

        const term = currentFilters.searchTerm.trim().toLocaleLowerCase('fr-FR');
        const filteredProducts = farm.products.filter(product => {
            const type = String(product.type || 'Autres').trim();
            const matchesType = currentFilters.type === 'all' || type === currentFilters.type;
            const matchesSearch = !term || product.name.toLocaleLowerCase('fr-FR').includes(term) ||
                type.toLocaleLowerCase('fr-FR').includes(term);
            return matchesType && matchesSearch;
        });
        renderGroupedProducts(filteredProducts);
    }

    // Helper pour générer les cartes produits
    function renderProductCards(products) {
        if (products.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
            return;
        }
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;

            let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price ${product.outOfStock ? 'original68-stock-price' : ''}">${product.outOfStock ? '⛔ RUPTURE DE STOCK' : `${product.tarifs[0].price.toFixed(2)}€`}</div>
                </div>`;
            productListContainer.appendChild(card);
        });
    }

    // --- MÉDIAS PRODUIT : plusieurs vidéos avec flèches, points et swipe ---
    // Styles injectés ici pour fonctionner sans modifier index.html.
    const original68MediaStyle = document.createElement('style');
    original68MediaStyle.textContent = `
        .original68-media-nav { display:flex; justify-content:center; align-items:center; gap:16px; margin:13px auto 6px; max-width:360px; }
        .original68-media-arrow { width:42px; height:42px; border-radius:50%; border:1px solid #a978f0; background:rgba(37,22,57,.93); color:#fff; font-size:24px; cursor:pointer; }
        .original68-media-arrow:active { transform:scale(.94); }
        .original68-media-position { min-width:90px; text-align:center; font-weight:700; font-size:14px; color:#e7d4ff; }
        .original68-media-dots { display:flex; justify-content:center; align-items:center; gap:8px; margin:0 auto 8px; }
        .original68-media-dot { width:10px; height:10px; border:0; border-radius:50%; background:#655079; padding:0; cursor:pointer; }
        .original68-media-dot.active { background:#b985ff; box-shadow:0 0 8px #b985ff; }
        .original68-stock-label { width:92%; text-align:center; font-size:12px; font-weight:800; color:#fff; padding:10px 4px; border:1px solid #c95580; border-radius:8px; background:linear-gradient(145deg,#862047,#3d1536); box-sizing:border-box; }
        .original68-stock-price { color:#ffb4d0 !important; font-weight:800; letter-spacing:.3px; }
    `;
    document.head.appendChild(original68MediaStyle);

    function renderProductMedia(product) {
        const video = document.querySelector('#page-product .product-video');
        if (!video) return;
        // Rétrocompatible : video:"..." pour tous les autres produits.
        const allVideos = Array.isArray(product.videos) && product.videos.length
            ? product.videos.filter(src => typeof src === 'string' && src.trim())
            : (product.video ? [product.video] : []);

        const previousNav = document.getElementById('original68-product-media-nav');
        if (previousNav) previousNav.remove();
        const previousDots = document.getElementById('original68-product-media-dots');
        if (previousDots) previousDots.remove();

        video.pause();
        video.poster = product.image || '';
        video.controls = allVideos.length > 0;
        video.preload = 'metadata';
        video.ontouchstart = null;
        video.ontouchend = null;
        video.onkeydown = null;
        if (allVideos.length === 0) {
            video.removeAttribute('src');
            video.load();
            return;
        }

        let activeIndex = 0;
        let nav = null;
        let dots = null;
        const selectVideo = (index) => {
            activeIndex = (index + allVideos.length) % allVideos.length;
            video.pause();
            video.src = allVideos[activeIndex];
            video.load();
            if (nav) nav.querySelector('.original68-media-position').textContent = `VIDÉO ${activeIndex + 1} / ${allVideos.length}`;
            if (dots) dots.querySelectorAll('.original68-media-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
                dot.setAttribute('aria-pressed', String(i === activeIndex));
            });
        };

        if (allVideos.length > 1) {
            nav = document.createElement('div');
            nav.id = 'original68-product-media-nav';
            nav.className = 'original68-media-nav';
            nav.innerHTML = `<button class="original68-media-arrow" type="button" data-step="-1" aria-label="Vidéo précédente">‹</button>
                <span class="original68-media-position"></span>
                <button class="original68-media-arrow" type="button" data-step="1" aria-label="Vidéo suivante">›</button>`;
            nav.addEventListener('click', (event) => {
                const btn = event.target.closest('button[data-step]');
                if (btn) selectVideo(activeIndex + Number(btn.dataset.step));
            });
            video.insertAdjacentElement('afterend', nav);

            dots = document.createElement('div');
            dots.id = 'original68-product-media-dots';
            dots.className = 'original68-media-dots';
            dots.innerHTML = allVideos.map((_, i) => `<button type="button" class="original68-media-dot" data-index="${i}" aria-label="Afficher vidéo ${i + 1}"></button>`).join('');
            dots.addEventListener('click', (event) => {
                const btn = event.target.closest('button[data-index]');
                if (btn) selectVideo(Number(btn.dataset.index));
            });
            nav.insertAdjacentElement('afterend', dots);

            let startX = 0;
            video.ontouchstart = (event) => { startX = event.changedTouches[0]?.screenX || 0; };
            video.ontouchend = (event) => {
                const dx = (event.changedTouches[0]?.screenX || 0) - startX;
                if (Math.abs(dx) > 55) selectVideo(activeIndex + (dx < 0 ? 1 : -1));
            };
            video.onkeydown = (event) => {
                if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                    event.preventDefault();
                    selectVideo(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
                }
            };
        }
        selectVideo(0);
    }

    // --- PAGE PRODUIT ---
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;

        renderProductMedia(product);

        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');

        let tarifsHTML = product.tarifs.map(tarif => `
        <div class="tarif-item">
            <div class="box-tarif">
                <div class="tarif-wieght">${tarif.weight}</div>
                <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
            </div>
            ${product.outOfStock
                ? `<span class="original68-stock-label" role="status">⛔ RUPTURE DE STOCK</span>`
                : `<button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}" aria-label="Ajouter au panier">
                       <svg width="20" height="20"><use href="#icon-cart"/></svg>
                   </button>`}
        </div>`).join('');

       // --- DANS TA FONCTION renderProductPage ---
detailsContainer.innerHTML = `
<div class="name">${product.name}</div>
<div class="farm">${product.farm}</div>
${product.description ? `<div class="product-description">${product.description}</div>` : ''} 
<h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
<div class="tarifs-grid-container">${tarifsHTML}</div>
`;
        showPage('page-product');
    }

    // --- PANIER & CONFIRMATION ---
    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p class="no-results">Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>`).join('');
        
        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        let discountableAmount = 0;

        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) discountableAmount += item.totalPrice;
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') discount = (discountableAmount * promo.value) / 100;
            else discount = promo.value;
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

        const itemsList = document.getElementById('confirmation-items-list');
        itemsList.innerHTML = cart.map((item, index) => `
             <div class="cart-item" style="border-bottom:1px solid #333;">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div style="color:white; font-weight:bold;">${index + 1}. ${item.name}</div>
                    <div style="color:#aaa;">Qté: ${item.quantity}x ${item.weight}</div>
                    <div style="color:#aaa;">PU: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>`).join('');

        const promoInputContainer = document.getElementById('promo-input-container');
        const promoAppliedContainer = document.getElementById('promo-applied-container');
        if (appliedPromo) {
            promoInputContainer.style.display = 'none';
            promoAppliedContainer.style.display = 'flex';
            document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
        } else {
            promoInputContainer.style.display = 'flex';
            promoAppliedContainer.style.display = 'none';
            document.getElementById('promo-code-input').value = '';
        }

        document.querySelectorAll('.payment-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.method === paymentMethod);
        });

        const summaryContainer = document.getElementById('confirmation-summary');
        let summaryHTML = `
            <div class="summary-line"><span>Sous-total:</span><span>${subTotal.toFixed(2)}€</span></div>
        `;
        if (discount > 0) {
            summaryHTML += `<div class="summary-line discount"><span>Réduction:</span><span>-${discount.toFixed(2)}€</span></div>`;
        }
        summaryHTML += `<div class="summary-line total"><span>💰 Total final:</span><span>${totalPrice.toFixed(2)}€</span></div>`;
        summaryContainer.innerHTML = summaryHTML;
        showPage('page-confirmation');
    }

    // --- ACTIONS DIVERSES ---
    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
            <span>${link.text}</span>
        </a>`).join('');
    }

    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

 // --- FILTRES (CATÉGORIE À L'ACCUEIL / TYPE DANS UNE FARM) ---
 function populateFilters() {
    const searchFilter = document.getElementById('search-filter');
    const qualityFilter = document.getElementById('quality-filter');
    const typeFilter = document.getElementById('farm-filter');

    const qualities = ['all', ...new Set(appData.map(category => category.quality).filter(Boolean))];
    if (qualityFilter) {
        qualityFilter.innerHTML = qualities.map(q =>
            `<option value="${escapeHtml(q)}">${q === 'all' ? '🔍 FILTRER CATÉGORIE' : escapeHtml(q)}</option>`
        ).join('');
        qualityFilter.addEventListener('change', e => {
            currentFilters.quality = e.target.value;
            renderHomePage();
        });
    }

    // Les choix sont mis à jour pour la farm ouverte dans updateTypeSelect().
    if (typeFilter) {
        typeFilter.addEventListener('change', e => {
            currentFilters.type = e.target.value;
            if (currentView === 'products' || currentView === 'simple_products') {
                renderHomePage();
            }
        });
    }

    if (searchFilter) {
        searchFilter.addEventListener('input', e => {
            currentFilters.searchTerm = e.target.value;
            renderHomePage();
        });
    }
 }

    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;
        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;
        notification.innerText = message;
        notification.classList.add('show');
        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    function addToCart(productId, weight, price) {
        const cartItemId = `${productId}-${weight}`;
        const existingItem = cart.find(item => item.id === cartItemId);
        const product = getProductById(productId);
        if (!product || product.outOfStock) {
            showNotification('⛔ Produit en rupture de stock.');
            return;
        }

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: product.name,
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price
            });
        }
        renderCart();
        tg?.HapticFeedback?.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }

    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;
        if (action === 'increase') item.quantity++;
        else if (action === 'decrease') item.quantity--;

        if (item.quantity <= 0) cart = cart.filter(i => i.id !== cartItemId);
        else item.totalPrice = item.quantity * item.unitPrice;
        renderCart();
        if(document.getElementById('page-confirmation').classList.contains('active')) renderConfirmation();
    }

    function formatOrderMessage() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            let discountableAmount = 0;
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) discountableAmount += item.totalPrice;
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') discount = (discountableAmount * promo.value) / 100;
            else discount = promo.value;
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

        let message = "🟣 ORIGINAL68 — DEMANDE  \n\n====================\nRÉSUMÉ :\n";
        message += `- ${totalItems} article${totalItems > 1 ? 's' : ''} commande\n`;
        message += `====================\nDETAIL DES ARTICLES:\n`;
        cart.forEach((item) => {
            message += `\n- ${item.name} (${getProductById(item.productId)?.farm || "ORIGINAL68"})`;
            message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
            message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
            message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
        });
        message += `\n\n====================\n\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
        if (discount > 0) message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`;
        message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`;
        message += "\n\nMerci de confirmer la disponibilité et les modalités.\n";
        message += `\nDemande préparée le ${formattedDate}\n`;
        return message;
    }

    // --- GESTION CLICK ---
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;
            if (pageId === 'page-contact') renderContactPage();
            if (pageId === 'page-home') {
                currentView = 'discovery';
                currentCategoryId = null;
                currentFarmId = null;
                currentFilters.type = 'all';
                currentFilters.searchTerm = '';
                document.getElementById('search-filter').value = '';
                renderHomePage();
            }
            showPage(pageId);
        });
    });

    document.body.addEventListener('click', function (e) {
        const target = e.target;

        // 1. CLIC CATEGORIE
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            const category = appData.find(c => c.id === categoryCard.dataset.categoryId);
            
            if (category.products) {
                // Si produits directs (Edibles, Extract)
                currentView = 'simple_products';
                currentCategoryId = category.id;
                currentFilters.type = 'all';
            } else if (category.farms) {
                // Si sous-catégories (Hash, Weed)
                currentView = 'farms';
                currentCategoryId = category.id;
                currentFilters.type = 'all';
            }
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 2. CLIC FARM (Sous-Catégorie)
        const farmBtn = target.closest('.farm-list-btn');
        if (farmBtn) {
            currentView = 'products';
            currentFarmId = farmBtn.dataset.farmId;
            currentFilters.type = 'all';
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 3. RETOUR CATEGORIES
        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.type = 'all';
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 4. RETOUR FARMS
        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.type = 'all';
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 5. PRODUITS / ACTIONS
        const productCard = target.closest('.product-item-card');
        if (productCard) {
            if (productCard.classList.contains('unclickable')) return;
            renderProductPage(productCard.dataset.productId);
            return;
        }

        if (target.closest('.accordion-header')) {
            const accordionItem = target.closest('.accordion-header').parentElement;
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) item.classList.remove('active');
            });
            accordionItem.classList.toggle('active');
            return;
        }

        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase();
            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg?.HapticFeedback?.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null;
                tg?.HapticFeedback?.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation();
        }

        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation();
        }

        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');
            const selected = getProductById(btn.dataset.productId)?.tarifs.find(t => t.weight === btn.dataset.weight);
            if (selected) addToCart(btn.dataset.productId, selected.weight, selected.price);
        }

        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        if (target.closest('.close-button') || target.closest('#cart-continue-shopping') || target.closest('.back-button')) {
            showPage('page-home');
        }

        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
        }

        if (target.closest('#checkout-button')) {
            // 1. Vibration haptique pour confirmer le clic
            tg?.HapticFeedback?.notificationOccurred('warning'); 
            
            // 2. On passe directement à la page de confirmation sans popup native
            if (cart.length) renderConfirmation();
            else showNotification('Le panier est vide.');
        }

        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

        if (target.closest('#confirm-order-button')) {
            if (!cart.length) return showNotification('Le panier est vide.');
            const message = formatOrderMessage();
            // Le deep link officiel Telegram ouvre le compte et place le texte en brouillon.
            // Le destinataire et le texte ne sont PAS envoyés automatiquement.
            const link = `https://t.me/original68off?text=${encodeURIComponent(message)}`;
            if (tg?.openTelegramLink) tg.openTelegramLink(link);
            else window.open(link, '_blank', 'noopener,noreferrer');
        }
        if (target.closest('#copy-order-btn')) {
            if (!cart.length) return showNotification('Le panier est vide.');
            const message = formatOrderMessage();
            const textarea = document.createElement('textarea');
            textarea.value = message;
            textarea.style.cssText = 'position:fixed;top:-9999px;left:-9999px';
            document.body.appendChild(textarea);
            textarea.focus(); textarea.select();
            let copied = false;
            try { copied = document.execCommand('copy'); } catch (_) {}
            textarea.remove();
            if (navigator.clipboard?.writeText) {
                navigator.clipboard.writeText(message)
                    .then(() => showNotification('📋 Récapitulatif copié !'))
                    .catch(() => showNotification(copied ? '📋 Récapitulatif copié !' : 'Copie non disponible.'));
            } else {
                showNotification(copied ? '📋 Récapitulatif copié !' : 'Copie non disponible.');
            }
        }
    });

    function init() {
        const loader = document.getElementById('page-loader');
        let dismissed = false;
        const closeLoader = () => {
            if (dismissed) return;
            dismissed = true;
            loader?.classList.add('o68-loader-ready');
            setTimeout(() => loader?.remove(), 850);
        };
        // Filet de sécurité pour ne jamais bloquer une mini-app sur le splash.
        const safetyTimer = setTimeout(closeLoader, 5500);
        setTimeout(() => {
            try {
                populateFilters();
                setupDiscoveryControls();
                setupWestCoastPlayer();
                renderHomePage();
                updateCartCount();
                showPage('page-home');
            } finally {
                clearTimeout(safetyTimer);
                // La mosaïque a le temps de former le logo avant la transition.
                setTimeout(closeLoader, 700);
            }
        }, 1550);
    }

    init();
});