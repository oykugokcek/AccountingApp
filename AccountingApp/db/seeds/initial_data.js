/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

   await knex.raw('SET FOREIGN_KEY_CHECKS=0');

  await knex("product").truncate();
  await knex("vehicle").truncate();
  await knex("owner").truncate();
  await knex("driver").truncate();  
  await knex("people").truncate();
  await knex("factory").truncate();
  await knex("address").truncate();


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
      name: "Fabrika 1",
      tax_number: "12345",
      people_id: 1,
      branch: "Şube 1",
      address: "Adres 1"
    },
    {
      name: "Fabrika 2",
      tax_number: "67890",
      people_id: 2,
      branch: "Şube 2",
      address: "Adres 2"
    }
  ]);

  await knex("address").insert([ 
    {
      neighborhood: "Mahalle 1",
      district: "İlçe 1",
      city: "A"  // Örnek bir şehir ID'si
    },
    {
      neighborhood: "Mahalle 2",
      district: "İlçe 2",
      city: "B"  // Örnek bir şehir ID'si
    },
  ]);

  await knex("owner").insert([ 
    {
      name: "Sahibi 1",
      tc: "34567890123",
      address_id: 1,
      phone_number: "3333",
      iban: "IBAN123"
    },
    {
      name: "Sahibi 2",
      tc: "45678901234",
      address_id: 2,
      phone_number: "4444",
      iban: "IBAN456"
    }
  ]);


  await knex("driver").insert([ 
    {
      name: "Şoför 1",
      tc: "12345678901",
      phone_number: "1111"
    },
    {
      name: "Şoför 2",
      tc: "23456789012",
      phone_number: "2222"
    }
  ]);


  await knex("vehicle").insert([ 
    {
      plate_number: "ABC123",
      type: "Araç Tipi 1",
      owner_id: 1,
      driver_id: 1
    },
    {
      plate_number: "XYZ456",
      type: "Araç Tipi 2",
      owner_id: 2,
      driver_id: 2
    }
  ]);


 

  await knex("product").insert([ 
    {
      name: "Ürün 1",
      price: 100.0
    },
    {
      name: "Ürün 2",
      price: 200.0
    }
  ]);


};
