var APP_DATA = {
  "scenes": [
    {
      "id": "0-extension---salon",
      "name": "Extension - Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.5121288422771553,
        "pitch": 0.06188811332910049,
        "fov": 1.3678641543670507
      },
      "linkHotspots": [
        {
          "yaw": -1.0084736323593404,
          "pitch": 0.040428668891596686,
          "rotation": 0,
          "target": "2-terrasse"
        },
        {
          "yaw": 0.3335883524042469,
          "pitch": 0.2949299065602613,
          "rotation": 0,
          "target": "1-extension---cuisine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.080467925506836,
          "pitch": -0.13863320422714942,
          "title": "Natura morta - Giorgio Morandi",
          "text": "L'oeuvre évoque une atmosphère de sérénité et de contemplation, grâce à sa palette de couleurs douces et ses compositions délicates. Ces éléments peuvent enrichir l’ambiance du salon, créant un espace propice à la détente et aux échanges."
        }
      ]
    },
    {
      "id": "1-extension---cuisine",
      "name": "Extension - Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4838102182171768,
        "pitch": 0.03793923955036682,
        "fov": 1.3678641543670507
      },
      "linkHotspots": [
        {
          "yaw": 2.3559383805508505,
          "pitch": 0.27403646321620023,
          "rotation": 0,
          "target": "0-extension---salon"
        },
        {
          "yaw": 2.608712330135921,
          "pitch": 0.12183997395281132,
          "rotation": 0,
          "target": "2-terrasse"
        },
        {
          "yaw": -0.8227348217664012,
          "pitch": 0.16912521633315336,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8609597694672644,
          "pitch": 0.4434266865651537,
          "title": "Tabouret LEM - LAPALMA",
          "text": "Le tabouret LEM - Lapalma se distingue par son design minimaliste et élégant, alliant esthétique moderne et fonctionnalité."
        }
      ]
    },
    {
      "id": "2-terrasse",
      "name": "Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6360190514819228,
        "pitch": -0.004542985297039337,
        "fov": 1.3678641543670507
      },
      "linkHotspots": [
        {
          "yaw": -2.5649867576750616,
          "pitch": 0.1984916940211292,
          "rotation": 0,
          "target": "0-extension---salon"
        },
        {
          "yaw": 2.2337266724654814,
          "pitch": 0.16138276711268773,
          "rotation": 0,
          "target": "1-extension---cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6014907110074184,
        "pitch": 0.10224388452983035,
        "fov": 1.3678641543670507
      },
      "linkHotspots": [
        {
          "yaw": -2.981551184816336,
          "pitch": 0.20083439902153444,
          "rotation": 0,
          "target": "1-extension---cuisine"
        },
        {
          "yaw": 1.1766733765586288,
          "pitch": 0.1230779869950851,
          "rotation": 0,
          "target": "4-salle-de-sport"
        },
        {
          "yaw": 1.71900039948242,
          "pitch": 0.12186420994524738,
          "rotation": 0,
          "target": "5-coin-lecture--jeu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salle-de-sport",
      "name": "Salle de sport",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2475161548625096,
        "pitch": 0.044043071579384474,
        "fov": 1.3678641543670507
      },
      "linkHotspots": [
        {
          "yaw": -2.4751689500923337,
          "pitch": 0.17167713795228678,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-coin-lecture--jeu",
      "name": "Coin lecture / jeu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.1640272197394843,
        "pitch": 0.03609373238550617,
        "fov": 1.3678641543670507
      },
      "linkHotspots": [
        {
          "yaw": 0.8249710371981251,
          "pitch": 0.21153039597969325,
          "rotation": 0,
          "target": "7-sam---bar-lounge"
        },
        {
          "yaw": 1.8799926029866025,
          "pitch": 0.20472746965718258,
          "rotation": 0,
          "target": "6-salle-de-projection"
        },
        {
          "yaw": -0.45479828581110127,
          "pitch": 0.3236640858908064,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-salle-de-projection",
      "name": "Salle de projection",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6443792988628747,
        "pitch": 0.026782725210726,
        "fov": 1.3678641543670507
      },
      "linkHotspots": [
        {
          "yaw": 1.4746818376588227,
          "pitch": 0.051396284385049285,
          "rotation": 0,
          "target": "5-coin-lecture--jeu"
        },
        {
          "yaw": 1.959606520266953,
          "pitch": 0.00913663688104549,
          "rotation": 0,
          "target": "7-sam---bar-lounge"
        },
        {
          "yaw": 1.6505609224785331,
          "pitch": 0.016952612335849437,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.069812084569058,
          "pitch": -0.5020106240361528,
          "title": "La Nuit étoilée - Vincent van Gogh ",
          "text": "Cette œuvre emblématique, avec son ciel tourbillonnant et ses couleurs vibrantes, crée une atmosphère à la fois dynamique et rêveuse, parfaite pour encourager la créativité et l'imagination."
        }
      ]
    },
    {
      "id": "7-sam---bar-lounge",
      "name": "S.A.M - Bar Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.563486299232908,
        "pitch": 0.004902904524421103,
        "fov": 1.3678641543670507
      },
      "linkHotspots": [
        {
          "yaw": -3.057818741126896,
          "pitch": 0.2284389476200399,
          "rotation": 0,
          "target": "3-hall"
        },
        {
          "yaw": 2.7674958455274563,
          "pitch": 0.28324542942641706,
          "rotation": 0,
          "target": "5-coin-lecture--jeu"
        },
        {
          "yaw": 1.740544813212244,
          "pitch": 0.3792284795878693,
          "rotation": 0,
          "target": "6-salle-de-projection"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
