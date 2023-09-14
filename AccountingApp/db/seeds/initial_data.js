/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

   await knex.raw('SET FOREIGN_KEY_CHECKS=0');

  await knex("waybill").truncate();
  await knex("product").truncate();
  await knex("transport").truncate();
  await knex("vehicle").truncate();  
  await knex("driver").truncate();
  await knex("factory_branch").truncate();
  await knex("address").truncate();
  await knex("factory").truncate();
  await knex("people").truncate();


   await knex.raw('SET FOREIGN_KEY_CHECKS=1');
  // Örnek verileri ekleme
  await knex("people").insert([ 
    {
      first_name: "oyku",
      last_name: "gokcek",
      phone_number: "1234"
    },
    {
      first_name: "ayse",
      last_name: "yilmaz",
      phone_number: "5678"
    },
    {
      first_name: "fatma",
      last_name: "bocek",
      phone_number: "9123"
    }
  ]);

  await knex("factory").insert([ 
    {
      name: "Tamek",
      tax_number: "8170582135",
    },
    {
      name: "Döhler",
      tax_number: "5760970424",
    },
    {
      name: "Etap",
      tax_number: "0691386511",
    },
    
  ]);

  await knex("address").insert([ 
    {
      city: "Balıkesir",
      district: "Merkez",
      neighborhood: "Ovaköy",
      street: null,
      post_code:10185
    },
    {
      city: "Bursa",
      district: "Karacabey",
      neighborhood: "Tavşanlı",
      street: null,
      post_code:16700
    },
    {
      city: "Denizli",
      district: "Çal",
      neighborhood: "Akçaköy",
      street: null,
      post_code:20710
    },
    {
      city: "Denizli",
      district: "Çivril",
      neighborhood: "Akçaköy",
      street: null,
      post_code:20600
    },
    {
      city: "Isparta",
      district: "Gönen",
      neighborhood: "Süleyman Demirel Or. Sanayi Bölgesi",
      street: null,
      post_code:32090
    }, 
    {
      city: "İzmir",
      district: "Kemalpaşa",
      neighborhood: "Ören",
      street: null
    }, 
    {
      city: "Manisa",
      district: "Turgutlu",
      neighborhood: "Ören",
      street: null
    }, 

  ]);
  



  await knex("factory_branch").insert([ 
    {
      factory_id: 1,
      address_id: 2
    },
    {
      factory_id: 2,
      address_id: 1
    },
    {
      factory_id: 2,
      address_id: 3
    },
    {
      factory_id: 3,
      address_id: 4
    },
    {
      factory_id: 3,
      address_id: 5
    },
   
  ]);


  await knex("driver").insert([ 
    {
      first_name: "Süleyman",
      last_name: "Çakır",
      tc_number: 34576193446
    },
    {
      first_name: "Süleyman",
      last_name: "Aydın",
      tc_number: 28516339254
    },
    {
      first_name: "Ergün",
      last_name: "Filiz",
      tc_number: 34852184276
    },
    {
      first_name: "Ümit",
      last_name: "Atasever",
      tc_number: 62917225914
    },
    {
      first_name: "Ceylan",
      last_name: "Polat",
      tc_number: 25621435772
    },
    
  ]);
  await knex("vehicle").insert([ 
    {
      plate_number: "17 AEN 396",
      capacity:"large"
    },
    {
      plate_number: "16 BBT 595",
      capacity:"large"
    },
    {
      plate_number: "16 FR 481",
      capacity:"medium"
    },
    {
      plate_number: "16 BRS 37",
      capacity:"small"
    },
   
  ]);


  await knex("transport").insert([ 
    {
      driver_id:1,
      vehicle_id:1
    },
    {
      driver_id:2,
      vehicle_id:2
    },
    {
      driver_id:4,
      vehicle_id:3
    },
    {
      driver_id:5,
      vehicle_id:4
    },
    
  ]);

  await knex("product").insert([ 
    {
      name: "Şeftali",
      price: 6.20
    },
    {
      name: "Elma",
      price: 2.30
    }
  ]);
  await knex("waybill").insert([ 
    {
      address_id:6,
      factory_branch_id:2,
      transport_id:1,
      product_id:1
    },
    {
      address_id:7,
      factory_branch_id:1,
      transport_id:3,
      product_id:2
    },
   
  ]);


};
