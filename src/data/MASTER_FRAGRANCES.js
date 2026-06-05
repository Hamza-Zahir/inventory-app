import { IMAGES } from "../IMAGES";
import { NOTES_IMAGES } from "./NOTES_IMAGES";

export const MASTER_FRAGRANCES = {
  afternoon_swim: {
    code: "afternoon_swim",
    brand: "Louis Vuitton",
    fragrance: "Afternoon Swim",
    family: "Citrus",
    gender: "unisex",
    image: IMAGES.afternoon_swim,
    notes: {
      top: [
        { note: "Orange", image: NOTES_IMAGES.orange },
        { note: "Mandarin", image: NOTES_IMAGES.mandarin },
        { note: "Bergamot", image: NOTES_IMAGES.bergamot }
      ],
      middle: [],
      base: [
        { note: "Ambergris", image: NOTES_IMAGES.ambergris }
      ]
    }
  },

  si_armani: {
    code: "si_armani",
    brand: "Giorgio Armani",
    fragrance: "Si",
    family: "Chypre Fruity",
    gender: "women",
    image: IMAGES.si,
    notes: {
      top: [
        { note: "Cassis", image: NOTES_IMAGES.cassis }
      ],
      middle: [
        { note: "Rose", image: NOTES_IMAGES.rose },
        { note: "Freesia", image: NOTES_IMAGES.freesia }
      ],
      base: [
        { note: "Vanilla", image: NOTES_IMAGES.vanilla },
        { note: "Patchouli", image: NOTES_IMAGES.patchouli },
        { note: "Woody Notes", image: NOTES_IMAGES.woody_notes }
      ]
    }
  },

  acqua_di_gio_profumo: {
    code: "acqua_di_gio_profumo",
    brand: "Giorgio Armani",
    fragrance: "Acqua di Giò Profumo",
    family: "Aromatic Aquatic",
    gender: "men",
    image: IMAGES.acqua_di_gio_profumo,
    notes: {
      top: [
        { note: "Bergamot", image: NOTES_IMAGES.bergamot },
        { note: "Marine Notes", image: NOTES_IMAGES.marine_notes }
      ],
      middle: [
        { note: "Geranium", image: NOTES_IMAGES.geranium },
        { note: "Rosemary", image: NOTES_IMAGES.rosemary },
        { note: "Sage", image: NOTES_IMAGES.sage }
      ],
      base: [
        { note: "Patchouli", image: NOTES_IMAGES.patchouli },
        { note: "Incense", image: NOTES_IMAGES.incense }
      ]
    }
  },

  vip_black: {
    code: "vip_black",
    brand: "Carolina Herrera",
    fragrance: "212 VIP Black",
    family: "Aromatic Fougere",
    gender: "men",
    image: IMAGES.vip_black,
    notes: {
      top: [
        { note: "Absinthe", image: NOTES_IMAGES.absinthe },
        { note: "Anise", image: NOTES_IMAGES.anise },
        { note: "Fennel", image: NOTES_IMAGES.fennel }
      ],
      middle: [
        { note: "Lavender", image: NOTES_IMAGES.lavender }
      ],
      base: [
        { note: "Black Vanilla Husk", image: NOTES_IMAGES.black_vanilla_husk },
        { note: "Musk", image: NOTES_IMAGES.musk }
      ]
    }
  },

  allure_homme_sport: {
    code: "allure_homme_sport",
    brand: "Chanel",
    fragrance: "Allure Homme Sport",
    family: "Fresh Spicy",
    gender: "men",
    image: IMAGES.allure_homme_sport,
    notes: {
      top: [
        { note: "Orange", image: NOTES_IMAGES.orange },
        { note: "Aldehydes", image: NOTES_IMAGES.aldehydes },
        { note: "Sea Notes", image: NOTES_IMAGES.sea_notes }
      ],
      middle: [
        { note: "Pepper", image: NOTES_IMAGES.pepper },
        { note: "Neroli", image: NOTES_IMAGES.neroli }
      ],
      base: [
        { note: "Tonka Bean", image: NOTES_IMAGES.tonka_bean },
        { note: "Vanilla", image: NOTES_IMAGES.vanilla },
        { note: "Amber", image: NOTES_IMAGES.amber },
        { note: "Musk", image: NOTES_IMAGES.musk }
      ]
    }
  },

  bleu_de_chanel: {
    code: "bleu_de_chanel",
    brand: "Chanel",
    fragrance: "Bleu de Chanel",
    family: "Woody Aromatic",
    gender: "men",
    image: IMAGES.bleu_de_chanel,
    notes: {
      top: [
        { note: "Lemon", image: NOTES_IMAGES.lemon },
        { note: "Mint", image: NOTES_IMAGES.mint },
        { note: "Pink Pepper", image: NOTES_IMAGES.pink_pepper }
      ],
      middle: [
        { note: "Ginger", image: NOTES_IMAGES.ginger },
        { note: "Nutmeg", image: NOTES_IMAGES.nutmeg },
        { note: "Jasmine", image: NOTES_IMAGES.jasmine }
      ],
      base: [
        { note: "Incense", image: NOTES_IMAGES.incense },
        { note: "Vetiver", image: NOTES_IMAGES.vetiver },
        { note: "Cedar", image: NOTES_IMAGES.cedar },
        { note: "Sandalwood", image: NOTES_IMAGES.sandalwood }
      ]
    }
  },

  coromandel: {
    code: "coromandel",
    brand: "Chanel",
    fragrance: "Coromandel",
    family: "Amber Woody",
    gender: "unisex",
    image: IMAGES.coromandel,
    notes: {
      top: [
        { note: "Bitter Orange", image: NOTES_IMAGES.bitter_orange },
        { note: "Citruses", image: NOTES_IMAGES.citruses }
      ],
      middle: [
        { note: "Patchouli", image: NOTES_IMAGES.patchouli },
        { note: "Rose", image: NOTES_IMAGES.rose },
        { note: "Jasmine", image: NOTES_IMAGES.jasmine }
      ],
      base: [
        { note: "Benzoin", image: NOTES_IMAGES.benzoin },
        { note: "Incense", image: NOTES_IMAGES.incense },
        { note: "Vanilla", image: NOTES_IMAGES.vanilla },
        { note: "Woody Notes", image: NOTES_IMAGES.woody_notes }
      ]
    }
  },

  chanel_no_5: {
    code: "chanel_no_5",
    brand: "Chanel",
    fragrance: "Chanel No. 5",
    family: "Floral Aldehydic",
    gender: "women",
    image: IMAGES.chanel_no_5,
    notes: {
      top: [
        { note: "Aldehydes", image: NOTES_IMAGES.aldehydes },
        { note: "Neroli", image: NOTES_IMAGES.neroli },
        { note: "Ylang Ylang", image: NOTES_IMAGES.ylang_ylang }
      ],
      middle: [
        { note: "Jasmine", image: NOTES_IMAGES.jasmine },
        { note: "Rose", image: NOTES_IMAGES.rose }
      ],
      base: [
        { note: "Sandalwood", image: NOTES_IMAGES.sandalwood },
        { note: "Vanilla", image: NOTES_IMAGES.vanilla },
        { note: "Vetiver", image: NOTES_IMAGES.vetiver }
      ]
    }
  },

  coco_mademoiselle_intense: {
    code: "coco_mademoiselle_intense",
    brand: "Chanel",
    fragrance: "Coco Mademoiselle Intense",
    family: "Amber Woody",
    gender: "women",
    image: IMAGES.coco_mademoiselle_intense,
    notes: {
      top: [
        { note: "Orange", image: NOTES_IMAGES.orange },
        { note: "Bergamot", image: NOTES_IMAGES.bergamot }
      ],
      middle: [
        { note: "Rose", image: NOTES_IMAGES.rose },
        { note: "Jasmine", image: NOTES_IMAGES.jasmine }
      ],
      base: [
        { note: "Patchouli", image: NOTES_IMAGES.patchouli },
        { note: "Tonka Bean", image: NOTES_IMAGES.tonka_bean },
        { note: "Vanilla", image: NOTES_IMAGES.vanilla }
      ]
    }
  },

  egoiste_platinum: {
    code: "egoiste_platinum",
    brand: "Chanel",
    fragrance: "Égoïste Platinum Égoïste Platinum",
    family: "Woody Floral Musk",
    gender: "men",
    image: IMAGES.egoiste_platinum,
    notes: {
      top: [
        { note: "Lavender", image: NOTES_IMAGES.lavender },
        { note: "Rosemary", image: NOTES_IMAGES.rosemary },
        { note: "Petitgrain", image: NOTES_IMAGES.petitgrain },
        { note: "Neroli", image: NOTES_IMAGES.neroli }
      ],
      middle: [
        { note: "Galbanum", image: NOTES_IMAGES.galbanum },
        { note: "Jasmine", image: NOTES_IMAGES.jasmine }
      ],
      base: [
        { note: "Oakmoss", image: NOTES_IMAGES.oakmoss },
        { note: "Vetiver", image: NOTES_IMAGES.vetiver },
        { note: "Cedar", image: NOTES_IMAGES.cedar },
        { note: "Sandalwood", image: NOTES_IMAGES.sandalwood },
        { note: "Amber", image: NOTES_IMAGES.amber }
        ,
        { note: "Vetiver", image: NOTES_IMAGES.vetiver },
        { note: "Cedar", image: NOTES_IMAGES.cedar },
        { note: "Sandalwood", image: NOTES_IMAGES.sandalwood },
        { note: "Amber", image: NOTES_IMAGES.amber }
      ]
    }
  }

};
