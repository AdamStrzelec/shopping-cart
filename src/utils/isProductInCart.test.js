import { isProductInCart } from './isProductInCart';

const mockedProducts = [
    {
          "id": "cdb58e09-1537-416f-9646-55a3d98518a8",
          "name": "Incredible Frozen Salad",
          "slug": "incredible-frozen-salad",
          "image": "https://i.picsum.photos/id/672/640/480.jpg?hmac=Qh6HFl-tBzGwlPPjrHmcNfk7DJCnPEwD7ErC7fFxiM0",
          "price": "164.00",
          "categories": [
            {
              "name": "commodi"
            }
          ]
        },
        {
          "id": "1ff7db58-9ab1-4fc5-acd8-8d4f8f76c173",
          "name": "Incredible Wooden Chicken",
          "slug": "incredible-wooden-chicken",
          "image": "https://i.picsum.photos/id/354/640/480.jpg?hmac=pMKfo0IVIZ_UvabmPadnj1F7PSmS7ZudIVRqsUpGzhk",
          "price": "226.00",
          "categories": [
            {
              "name": "commodi"
            },
            {
              "name": "laudantium"
            }
          ]
        },
        {
          "id": "822e9cfa-0a94-49ee-b367-315ef02d72ad",
          "name": "Refined Cotton Chips",
          "slug": "refined-cotton-chips",
          "image": "https://i.picsum.photos/id/912/640/480.jpg?hmac=UyA_9gNPvXZFHb1V5HUq_0VhWjiUcc164LInaVyUo4k",
          "price": "152.00",
          "categories": [
            {
              "name": "commodi"
            }
          ]
        }
  ]

  it('contains product in cart', () => {
    expect(isProductInCart('refined-cotton-chips', mockedProducts)).toBe(true);
  })

  it('not contains product in cart', () => {
    expect(isProductInCart('fish', mockedProducts)).toBe(false);
  })