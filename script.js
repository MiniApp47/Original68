document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram?.WebApp || null;
    tg?.ready?.();
    tg?.expand?.();
    tg?.setHeaderColor?.('#1b0e31');
    tg?.setBackgroundColor?.('#100b1c');

  // Contact unique ORIGINAL68
  const contactLinks = [
    { name: 'TELEGRAM', url: 'https://t.me/original68off', className: 'telegram-canal', text: '✈️ CONTACTE' }
  ];

  // --- DONNÉES ORIGINAL68 : HASH et WEED -> 12 FARMS -> 26 PRODUITS ---
  // Dans chaque produit : tarifs: [{ weight:'1g', price:20 }, ...]
  const appData = [
    {
        "id": "HASH",
        "name": "HASH",
        "quality": "HASH",
        "image": "Original68_Fond.jpg",
        "icon": "🍫",
        "productCount": 24,
        "farmCount": 11,
        "farms": [
            {
                "id": "no-farm",
                "name": "NO FARM",
                "icon": "🌴",
                "badgeText": "Double Static • 1 référence",
                "products": [
                    {
                        "id": "no-farm-tropical-mango",
                        "name": "Tropical Mango",
                        "flag": "🌴",
                        "farm": "NO FARM",
                        "type": "Double Static",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Double Static · NO FARM ",
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
                "name": "GOLDEN DRYTECH FARM",
                "icon": "🏆",
                "badgeText": "105µ • 1 référence",
                "products": [
                    {
                        "id": "golden-fruit-joy",
                        "name": "Fruit Joy",
                        "flag": "🏆",
                        "farm": "GOLDEN DRYTECH FARM",
                        "type": "105µ",
                        "image": "Original68_Fond.jpg",
                        "video": "",
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
                "name": "NOVA FARM",
                "icon": "💠",
                "badgeText": "Fresh Frozen / Double Static • 5 références",
                "products": [
                    {
                        "id": "nova-ff-tangie-mandarine",
                        "name": "Tangie Mandarine",
                        "flag": "💠",
                        "farm": "NOVA FARM",
                        "type": "Fresh Frozen",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Fresh Frozen · NOVA FARM ",
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
                        "id": "nova-ff-mimosa-max",
                        "name": "Mimosa Max",
                        "flag": "💠",
                        "farm": "NOVA FARM",
                        "type": "Fresh Frozen",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Fresh Frozen · NOVA FARM ",
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
                        "id": "nova-ff-solero-lemon",
                        "name": "Solero Lemon",
                        "flag": "💠",
                        "farm": "NOVA FARM",
                        "type": "Fresh Frozen",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Fresh Frozen · NOVA FARM ",
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
                        "name": "Orange Runtz",
                        "flag": "💠",
                        "farm": "NOVA FARM",
                        "type": "Double Static",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Double Static · NOVA FARM ",
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
                        "name": "Mimosa Max",
                        "flag": "💠",
                        "farm": "NOVA FARM",
                        "type": "Double Static",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Double Static · NOVA FARM ",
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
                "name": "ANONYMUZ FARMZ",
                "icon": "🪐",
                "badgeText": "FFS / 120µ • 5 références",
                "products": [
                    {
                        "id": "anonymuz-tropicali",
                        "name": "Tropicali",
                        "flag": "🪐",
                        "farm": "ANONYMUZ FARMZ",
                        "type": "FFS",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection FFS · ANONYMUZ FARMZ ",
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
                        "name": "Tropic Guavana",
                        "flag": "🪐",
                        "farm": "ANONYMUZ FARMZ",
                        "type": "FFS",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection FFS · ANONYMUZ FARMZ ",
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
                        "name": "Tropic Cherry",
                        "flag": "🪐",
                        "farm": "ANONYMUZ FARMZ",
                        "type": "FFS",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection FFS · ANONYMUZ FARMZ ",
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
                        "name": "White Tropicali",
                        "flag": "🪐",
                        "farm": "ANONYMUZ FARMZ",
                        "type": "FFS",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection FFS · ANONYMUZ FARMZ ",
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
                        "name": "Ice Cream Cake X Grape Gas",
                        "flag": "🪐",
                        "farm": "ANONYMUZ FARMZ",
                        "type": "120µ",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection 120µ · ANONYMUZ FARMZ ",
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
                "name": "PARADISE VALLEY",
                "icon": "🌴",
                "badgeText": "Static Prime • 2 références",
                "products": [
                    {
                        "id": "paradise-pikachu-peach",
                        "name": "Pikachu Peach",
                        "flag": "🌴",
                        "farm": "PARADISE VALLEY",
                        "type": "Static Prime",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Static Prime · PARADISE VALLEY ",
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
                        "name": "Forbiden Tropic",
                        "flag": "🌴",
                        "farm": "PARADISE VALLEY",
                        "type": "Static Prime",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Static Prime · PARADISE VALLEY ",
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
                "name": "SMUGGLER FARM",
                "icon": "🍬",
                "badgeText": "Frozen • 1 référence",
                "products": [
                    {
                        "id": "smuggler-calippo-x-ff",
                        "name": "Calippo X ff",
                        "flag": "🍬",
                        "farm": "SMUGGLER FARM",
                        "type": "Frozen",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Frozen · SMUGGLER FARM ",
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
                "name": "QUALITY CAN YOU TASTE",
                "icon": "🇺🇸",
                "badgeText": "Static • 1 référence",
                "products": [
                    {
                        "id": "quality-berry-white",
                        "name": "Berry White",
                        "flag": "🇺🇸",
                        "farm": "QUALITY CAN YOU TASTE",
                        "type": "Static",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Static · QUALITY CAN YOU TASTE ",
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
                "name": "LIQUID FARM",
                "icon": "🇺🇸",
                "badgeText": "Wpff • 2 références",
                "products": [
                    {
                        "id": "liquid-papaya",
                        "name": "Papaya",
                        "flag": "🇺🇸",
                        "farm": "LIQUID FARM",
                        "type": "Wpff",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Wpff · LIQUID FARM ",
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
                        "name": "Paplato",
                        "flag": "🇺🇸",
                        "farm": "LIQUID FARM",
                        "type": "Wpff",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Wpff · LIQUID FARM ",
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
                "name": "STATICROOM",
                "icon": "🇺🇸",
                "badgeText": "Static • 2 références",
                "products": [
                    {
                        "id": "staticroom-white-runtz",
                        "name": "White Runtz",
                        "flag": "🇺🇸",
                        "farm": "STATICROOM",
                        "type": "Static",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Static · STATICROOM ",
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
                        "name": "Cereal Milk",
                        "flag": "🇺🇸",
                        "farm": "STATICROOM",
                        "type": "Static",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Static · STATICROOM ",
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
                "name": "HUMBOLDT",
                "icon": "🇺🇸",
                "badgeText": "Static • 3 références",
                "products": [
                    {
                        "id": "humboldt-grape-gas",
                        "name": "Grape Gas",
                        "flag": "🇺🇸",
                        "farm": "HUMBOLDT",
                        "type": "Static",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Static · HUMBOLDT ",
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
                        "name": "Red Bull",
                        "flag": "🇺🇸",
                        "farm": "HUMBOLDT",
                        "type": "Static",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Static · HUMBOLDT ",
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
                        "name": "Purple Dream",
                        "flag": "🇺🇸",
                        "farm": "HUMBOLDT",
                        "type": "Static",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Static · HUMBOLDT ",
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
                "name": "SIFTY KREME",
                "icon": "🌈",
                "badgeText": "Mix • 1 référence",
                "products": [
                    {
                        "id": "sifty-five-strains",
                        "name": "Mix 5 Strains",
                        "flag": "🌈",
                        "farm": "SIFTY KREME",
                        "type": "Mix",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "5 variétés dans un format de 5g : Papaya, Super Buff Cherry, Banana Punch, Trop Cherry et Pie Hoe.",
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
        "id": "WEED",
        "name": "WEED",
        "quality": "WEED",
        "image": "Original68_Fond.jpg",
        "icon": "🌿",
        "productCount": 2,
        "farmCount": 1,
        "farms": [
            {
                "id": "cali-topshelf",
                "name": "CALI TOPSHELF BAGS",
                "icon": "🇺🇸",
                "badgeText": "Bags • 2 références",
                "products": [
                    {
                        "id": "cali-bolo-runtz",
                        "name": "Bolo Runtz",
                        "flag": "🇺🇸",
                        "farm": "CALI TOPSHELF BAGS",
                        "type": "Bags",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Bags · CALI TOPSHELF BAGS ",
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
                        "name": "Melted Cherries",
                        "flag": "🇺🇸",
                        "farm": "CALI TOPSHELF BAGS",
                        "type": "Bags",
                        "image": "Original68_Fond.jpg",
                        "video": "",
                        "description": "Sélection Bags · CALI TOPSHELF BAGS ",
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
    let currentFilters = { searchTerm: '', quality: 'all', farm: 'all' };
    
    // NAVIGATION ETAT (Logique Pistachio)
    let currentView = 'categories'; // 'categories', 'farms' (sous-cat), 'simple_products' (direct), 'products' (via farm)
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
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;

    const escapeHtml = (v) => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&#39;'}[c]));

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
        pages.forEach(p => p.classList.remove('active'));
        const page = document.getElementById(pageId);
        if (page) page.classList.add('active');

        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info');
        const contactNav = document.getElementById('nav-contact');

        if(homeNav) homeNav.classList.remove('active');
        if(infoNav) infoNav.classList.remove('active');
        if(contactNav) contactNav.classList.remove('active');

        if (pageId === 'page-contact') contactNav.classList.add('active');
        else if (pageId === 'page-info') infoNav.classList.add('active');
        else homeNav.classList.add('active');
    }

    // --- RENDER HOME (Logique Pistachio adaptée) ---
    function renderHomePage() {
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
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        // 2. Vue SOUS-CATÉGORIES (Liste Farms)
        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId); // Affiche la liste Frozen/Static...
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; // Liste verticale

            // Bouton Retour
            const category = appData.find(c => c.id === currentCategoryId);
            createBackButton('back-to-categories-btn', category.name);

        // 3. Vue PRODUITS DIRECTS (ex: Edibles)
        } else if (currentView === 'simple_products') {
            renderProductListSimple(currentCategoryId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            createBackButton('back-to-categories-btn', category.name);

        // 4. Vue PRODUITS VIA SOUS-CAT (ex: Hash -> Frozen -> Produits)
        } else if (currentView === 'products') {
            renderProductList(currentCategoryId, currentFarmId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex';
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

    // RENDER PRODUITS DIRECTS (Pour Edibles)
    function renderProductListSimple(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category || !category.products) return;

        const filteredProducts = category.products.filter(product => {
            return product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        });

        productListContainer.innerHTML = '';
        renderProductCards(filteredProducts);
    }

    // RENDER PRODUITS VIA SOUS-CAT (Pour Hash/Weed)
    function renderProductList(categoryId, farmId) {
        const category = appData.find(c => c.id === categoryId);
        const farm = category.farms.find(f => f.id === farmId);
        if (!farm) return;

        const filteredProducts = farm.products.filter(product => {
            return product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        });

        productListContainer.innerHTML = '';
        renderProductCards(filteredProducts);
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
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>`;
            productListContainer.appendChild(card);
        });
    }

    // --- PAGE PRODUIT ---
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;

        const videoElement = document.querySelector('#page-product .product-video');
        if(videoElement) {
             if (product.video) videoElement.src = product.video;
             else videoElement.removeAttribute('src');
             videoElement.poster = product.image;
             videoElement.controls = Boolean(product.video);
             videoElement.load();
        }

        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');

        let tarifsHTML = product.tarifs.map(tarif => `
        <div class="tarif-item">
            <div class="box-tarif">
                <div class="tarif-wieght">${tarif.weight}</div>
                <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
            </div>
            <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                <svg width="20" height="20"><use href="#icon-cart"/></svg>
            </button>
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
            <svg width="24" height="24"><use href="${link.icon}"/></svg>
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

 // --- FILTRES (CORRIGÉ) ---
 function populateFilters() {
    const searchFilter = document.getElementById('search-filter');
    const qualityFilter = document.getElementById('quality-filter');
    const farmFilter = document.getElementById('farm-filter');

    // 1. On rassemble tous les produits pour trouver toutes les "Farms" existantes
    const allNestedProducts = [];
    appData.forEach(category => {
        if (category.farms) {
            // Si sous-catégories
            category.farms.forEach(subCat => allNestedProducts.push(...subCat.products));
        } else if (category.products) {
            // Si produits directs
            allNestedProducts.push(...category.products);
        }
    });

    // 2. Remplissage du SELECT "QUALITÉ" (Pour filtrer les Catégories sur l'accueil)
    // On récupère la propriété "quality" de chaque catégorie dans appData
    const categoryQualities = appData.map(c => c.quality).filter(Boolean); 
    // On enlève les doublons
    const qualities = ['all', ...new Set(categoryQualities)];

    if (qualityFilter) {
        qualityFilter.innerHTML = qualities.map(q => 
            `<option value="${q}">${q === 'all' ? '🔍 FILTRER CATÉGORIE' : q}</option>`
        ).join('');

        // Action quand on change la qualité
        qualityFilter.addEventListener('change', (e) => {
            currentFilters.quality = e.target.value;
            renderHomePage();
        });
    }

    // 3. Remplissage du SELECT "FARM" (Pour filtrer les Produits)
    const productFarms = allNestedProducts.map(p => p.farm).filter(Boolean);
    const farms = ['all', ...new Set(productFarms)];

    if (farmFilter) {
        farmFilter.innerHTML = farms.map(f => 
            `<option value="${f}">${f === 'all' ? '👨‍🌾 TOUTES les Farms' : f}</option>`
        ).join('');

        // Action quand on change la farm
        farmFilter.addEventListener('change', (e) => {
            currentFilters.farm = e.target.value;
            renderHomePage();
        });
    }

    // 4. Action de la barre de recherche
    if (searchFilter) {
        searchFilter.addEventListener('input', (e) => {
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
                currentView = 'categories';
                currentCategoryId = null;
                currentFarmId = null;
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
            } else if (category.farms) {
                // Si sous-catégories (Hash, Weed)
                currentView = 'farms';
                currentCategoryId = category.id;
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
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 3. RETOUR CATEGORIES
        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 4. RETOUR FARMS
        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
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
        setTimeout(() => {
            populateFilters();
            renderHomePage();
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});