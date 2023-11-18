<template>
  <v-container id="teams" class="mt-10 mb-5">
    <h2 class="minit-title">Our Development Team</h2>
    <v-row>
      <v-col sm="12" xl="6">
        <v-row>
          <v-col sm="6" md="4" xl="4" v-for="(team, i) in teams" :key="i">
            <v-hover v-slot="{ isHovering, props }">
              <v-card v-bind="props">
                <v-img height="300" :src="team.image"></v-img>

                <v-card-text>
                  <h2 class="text-h6 text-primary">{{ team.title }}</h2>
                  {{ team.description }}
                </v-card-text>

                <v-card-title>
                  <v-rating
                    :model-value="4"
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    class="me-2"
                  ></v-rating>
                  <span class="text-primary text-subtitle-2">64 Reviews</span>
                </v-card-title>

                <v-overlay
                  :model-value="isHovering"
                  contained
                  scrim="#036358"
                  class="align-center justify-center"
                >
                  <v-btn variant="flat">See more info</v-btn>
                </v-overlay>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="12" xl="6">
        <v-alert elevation="2" class="p-text" color="white">
          The software development teams at "MIN IT" are a powerhouse of talent,
          creativity, and technical proficiency. Comprising skilled
          professionals in various domains such as front-end and back-end
          development, UI/UX design, and quality assurance, these teams work
          cohesively to craft cutting-edge software solutions. Fueled by a
          passion for innovation, they thrive on challenges, embracing the
          latest technologies and industry best practices. With a commitment to
          delivering excellence, "MIN IT" software development teams are at the
          forefront of creating robust, user-friendly, and scalable applications
          that cater to the evolving needs of clients and users.
          <br />
          For More Details Please Contact with us.
        </v-alert>
        <v-alert elevation="2" class="p-text mt-10" color="white">
          The software development teams at "MIN IT" are a powerhouse of talent,
          creativity, and technical proficiency. Comprising skilled
          professionals in various domains such as front-end and back-end
          development, UI/UX design, and quality assurance, these teams work
          cohesively to craft cutting-edge software solutions. Fueled by a
          passion for innovation, they thrive on challenges, embracing the
          latest technologies and industry best practices. With a commitment to
          delivering excellence, "MIN IT" software development teams are at the
          forefront of creating robust, user-friendly, and scalable applications
          that cater to the evolving needs of clients and users.
          <br />
          For More Details Please Contact with us.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      teams: [
        {
          image:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgYGBgZGBgaGBgYGhgaGBgZGRgZGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHTQkISs0MTExMTQ0NjQ0NDE0NDQ0NDY0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQoAvgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAgMFBgcBAAj/xAA+EAACAQICBwUFBwMEAgMAAAABAgADEQQhBRIxQVFxgQYiYZGhBxMyscFCUoKS0eHwYnKyFHOiwjTxIySz/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAiEQEBAQEAAgMBAAMBAQAAAAAAAQIRAyESMUFRMmFxIhP/2gAMAwEAAhEDEQA/ANenp6egHIkxRjbGBPEzl4lmnNaALvPGJBnYBwyE012owuFyrVlVvuC7N+VbmUrt37QijNh8IwuLq9YZ571p7ubeXGZcKLVGLOxJOZJJJN95JzJgrjd9H9usDW+Grq5276lNuzblDcT2nwSNqPiaSNwZwPXZMGekqLYuQOF7k23eEicTWBNlF+YuYy4+oKVZXUOjKynMMpDKeRGRnjPmjQumK2GfWoVXpm+dj3G8GQ5HrNl7IdtVxNqVYCnW2Dcj/wBt9h8D+0BxbWjLiPNGniIM4glUQ1xBKsAAriBVIdWECqCCoBrCCuIZVEFcQUFcQZxC6kGeINznDPTxjZkMY07RxjBazQBLvOK8Eq1Z6nVgEirSge07tUaKf6WkxDut6jg5ohvZFO5m9BzBlwx+kFoUXrP8KIzHxsMgPEmw6z520pjnr1XqObs7FmO653DwAso4BYKn9Dol8z0EKR8rLt8d3ieMCd49hUZ21FBPH9+Uf0f2IejrCy9XO1v7eAjGi6JWra2tcFSFIJFxa+X0ll0X2TrV2s90TeTtPMDd4S8YDshRpKAq3YfaI37jaZ68k/Gs8V/WIYimUYqdqkjhsMl9DVCbKfiXNCNtuHT9uFpLtl2eqUqhc5hjttaRuiqZHMZjxG/0lZ1LGes3NbH2N0//AKhPd1D/APIg2na68fEjZLE8x3AY1qVRKqbVNyOI3jqPlNcwuKWqiVEN1dQw67pVRY44gtQQtxBqgiJH1hAqgkhWEBqCCoCqiCOIdUEDqiIwlSCVDCqkDqGBt2iTFGJaNmZcwHEvDKpkTjngEfiMRYxWFr3kDpPF2Mf0TitaB8RntW0oUwyUVOdR9ZvFUsQPzsh/DMntbLzlq9pGONTFhN1NFUc7lifUeUqbHInj9IK/CCbm/lzM0TsLooBNcjbs/UzPsNT1mA4m3UmbF2ep6iBbbJl5b6428OfdqxYWnaSlBIDhhJCnUVRdiAOJIA9ZGYvdRXaLQ610ZSAcpileg2GxHum+Emyk7ju8726zeH0tQOSuG8VBYDmQLCZZ7SdGawFVMxtBBv1BErvNJkus3/SCRwrFdx7y8jw6j0midgcZdHoE/AwdP7X2jowJ/HMrwuJ1wDvBBP4sm/5S39ksbqYmnnYOCh5N8I/MF85swsac4gziFPBqkEA60AqiH1oDVgqA6kEqiGPBKsRgasDqCG1YHUgbc4losxDRswtcyC0k+Rk1iTK3pd7AwCj9oMXYmK7NaQvfPPZIbtDW7xkdoHGajkXyMGgDTWI95iKr8XYDkp1B6KJHYg2AEcD3JPFj+saqnMnh9Mh9IFUl2eo02qj3r6iLcs17eRmkaF0dh2N8NjmY/cLhtm3unOVTsp2UasqVGta99U7+HWaJgOy2HpqwWiFLEEkO4IZSCGXOwIIGzlsmOtS1vjNzIktGMxJQm5G2RemUpK5etrPqmwS5IvwCjaYboN74hzu/TK8kdJ6MV2D7DxsNtrXz8JnJ2NLZNcqvaG7ZoUumErCnrFSyIjamqbEsiNreQMktKYFMRRYqtg1yMrXJ324w/CU9TK5PO1vQQuvslX3CnqvnLF0/c4h0IsLnyO31+UmcJiCrI33bOOY7w5ZrGvaTSC41iN6KfnAsNirqhP8Ab6g/Rj1m2b3MYanNWN8pVAyqw2EAjkYzUgHZXEF8JRY7dQA/huv0h9WUyB1oDVh1aBVYjgN4JVhjwOtAwVWB1IZVgVSBt0iGi4ho2YLEmVXTb5GWnFbJUe0B7pgIy7TtTvGQtCpYkyR00/eMikMKuGxtPMn6fWNPuHE3P0+scO/nB6rd6/iIBsfYitZFHgJb9JYxUplmO2wA4kmwHmRKH2SqdxeQli0oi1iqN9mz7bWIPdPpOTru+MtlHaCQq5ZsrmS+lXZabMhBKjWC7da21R4ndKzh6Kq5Y1yCTve4HgBsHST+HxWHXvErrkWLWuTzMqfXE6ze/LnQ2jNIK4DDfDcXiARlKfpXEU6eI/8AruGvZqlIA9zWIAcfduSMjt2jfeepAkC8i2z0rk78mTe1AgYoC2ZpIb8O84+krGDfucnHrl9ZMe0PHCrjX1cxTAp38VuW8mLDpICkbI34f8v2nViczHHu91a3PsBU1sDT8C48na3paTtSQPs+S2ApeOu35nYyeqRs/wBB1YHVhtWB1YHAVSCVoZUgdaBgqsDqCGVYG8DblENFmJaNmBxQylO7RfCZdMSMpTe0S909YCMh0ye+ZGpJHTPxmRqmKrhtoLa/W8Iqm1/5vjSLe3P9Yyq/+z3SysPct8S5r/Uv6jZ5S59oNFrXVXRijpYqQcmtnqOPtKeExI1Gp1AykqynWUjcf02zU+yfapMQoR7LUA7y7j/UvEfKY7xy9jp8Xk76v2n9H18Na1TDgNq2OdxrXOy5BEmqGPpHu0qaJstkC1wdyjntMCTAI5uygyWwODRPhAHKwky1trWOfV7/AN9Gamjl1GJUa72LNbMkWtc79glb7X6cGDw7OPjbuUxt75BzPgACelt8tuNxIUWGZOQA3zLfarQb3SMc7OL8BdWAtFyXUZ/K/G1mDuSSxJJJJJOZJO0k74tT3TyEZMO0Zgmr1Eop8TsqDwucyfAAE9J0uSN07GUimBwwO33SN+bvD5yXqT1CkERUXYqhRyUWHynnMRBKsDqQytBKkDBVIJVhlSCVYGAqwN4bVgbwNuBiWnYkxszFcZSo9oU7plvqiVftCndMAxPTfxnnIsHKSun/AIzzkO5yhVmamcdRbMv4fpHsHSBJv4npbdytPOlnXkv6fSA4b0hTtnOaLB1xYkG+RGRHiDHtKjZ/OM5ohCHB4GTr/E8z/wBNG0JpivkjNc7idp5y44F6r7WAHgPreUrRaXKkTQdFrZROX9duvUE0sNbxO8naZUfaZhgcFUY7ilv7i6gfOXdmmXe1LTAcphkOQPvH6ZIvmSegmuc91Iw1by1lbpY+Evnsn0Uz4lq5HdpIQD/W/dAG6+qWvwuOMq74cGW/sx27bCp7qqhqUxYKykCog2WzycbLXII4nK3Tc1zNZaMPIrR3azB4iwSsFY/Yqdxr8BrZMeRMlXk2cILVMEeGVRA6kSglSCVYXUgtWBgKogjiG1BBHEDbXEmdM4Y2Zp5Wu0XwHlLK8qfaqsFRuRgGLdoD3zzkU1MlT4frb6x/G4lqrs4yW/pu6mep1NUap32v4Bb/AFPpCrnsjDPZLj40Nx4jePn5Rovc/Lr+8Sj2z4m3P+XnqSZkRHBekhcqeP7H9ZNdnMDrDnfzEiMSe4L7QLW4HMH5y5dhKOvRY/aDkDkVX94t/wCPWnj/AM0loTDEHkbS74O9hBcBo9VW+82vD7hRlOWf10a9+jGlMVqIT4TDtK4n3ld3OfetflNW7WYoJh3djsBymO0wdp2m5PM7Z0eCd1aw83qSHjsglQZE+I+cKY2FvKNsMrG2c6+OYPTqbpIYHS9ejb3VV0HBWIXquw+UjKqapi1N4pfwLbhO3eKS2uUqD+pArdClvUGTmB7aUnsHRqZO+4dRzOR9JndJb5+XKOFrQuZR1rpYMAQQQRcEZgg7CDGKglc7EaS11eix+Hvpf7pNnHQkH8RlkqTGzlXANWCvCqsEcxG2icM7OGNmZrvYTLvaXpUJSKZ3c6gtwtdj5fMTScc9gZhXtKxmviVQHJE/5Obn0VfOOBWfed0HYq5ADidn/uCubn+dY5VawUcj1bP5Tr0/T6xVoZYXPL0vCMMO8MrgbQOA/aK93bIC5JIt/OsMw9HVUHbffusDnbwvl0MVEnsPpOrfZls3W+yL/SX32XOGWsm8BHXprK/oU/LM4xjXa/8AMz+lpa/ZtjCmKTP4lZeeWt/1lzM1OUrqy9jYEbKec5TjpY5bDmP06GNVz3TOPUsvK688s7Gfe0TG9xaYPxML8h3j8gOspKya7ZVNbE6t76iAnwL52/KFPWQpM7PDn459ubza+WvRupPVWst9+6cUXMRiRrdJqyDu184tB+nnGCbQumO6vib+Q/eTPYEDIRp3/n6CIqVLmw2/LxnEW58BtP3jwl9CX7L1ymJpHczFOeupUf8AIrNIqTKcO+q6t91lblqsDNXrCZb+1ZR9WBVDDq0j6kzU2yJaKjbmNmhdN4jVUz530/iDUxNV77XIH4bL/wBZu3aisFRidgBPkJ89GrcljtYlvzEk/OOA/jUzB3G3ytDsOl1LW2Gx8rwem4Zc9mV/C1hf5QmjU1KbjezGw/Dqj1kVtPvr2Fpa+V7AfGdhtwHiTf8Al57E1wzkDJVtyAGwDwAnUqKlPVHiTxJ3n5D/ANQAva/E5nwPDpshBbyGa7XMP0FivdVke/wOrHkD3vS8AcReHOYm2ftjX0RRq61MMN2fQ7foekErVgb32KNZvoOv0MB7B4z3uGQNn3Sh5qSp8xY9ZG9pMU2GwVXWPfYuv4mbUB5AW9OMnXi+W+/jTPk5m5/WZ4zFGrVqVSb67s3S9l/4gQdmnEyFvCcJmrMtPnEVEKnwMWm2OVUuIADiVFr7553sqn+mw5kxxSMwYPixbVHgZN/oKw6X+p4+ENKZW2QfDggX/gjy5ys/QcrDunkflNaY3APEA+YmTtNN0TULYeix2mml+eqLzPyHkmsJH1RJKtAKgma2zxt9kXEVI2ahe0J9XD1W4I3qLCYWVymze1mtq4Urvd0QdCXPokx1hlKkBWHJt4gnyIj5fujxI+QufnB8OcmHgflPF+6DwHTM2+Ui/bTN9CXe3ePDuj8R73pAWJ8rx6s12AP3APLOPrQv3t37fOA+zC5icGRjtIbbRFRbTWfSK0n2WYw61WluGpUH4gUf/FIP7UMZd/dA7XBI/tRbjzZDAPZniNXGKCfjpuvMgq49FeQfaXGmri67bveuB+E6l/JF8pfU/qPJjZe1z/LzrGIqDIDrEZ+kco+Km4wajlaP16esLyoDdalvEHrLd1HBZ5KxU2MZd+8x5CTbAILXNhshCGCUVyueg3Qmm944HXM0bs45OFo3+5boCQD1AB6zO3E0Xs+98LR8EC/lJX6SNnk9VgVQQ2pBHmS2xRDxRiGjZse9s2JOvh6e6zuR5Kv/AGmbMsuftRxWvpBl3JTROt2Y/wCUqDIRymmZ6AYNY+k8manmPLbO1l3iN0nsbbjtk6ipTrPdh4DI+eUkMAwzU7xl9R0/WRTDvGP0yRax2Sfj05rhYUo5B5fp6R6ssTXOuL5X+oi0fWW82z9cRRXZ7Ge5xFKp9x1v/a3cc/lYwHEk673267356xibZxh3JLE7dYk+cLfQO3ilz6xnWyi1MUoPqNkfR90HRoo8RLgM44DbAb+v1heLe4hWjNCPWVCt7u+qMu6FA7zsdwH08RMtWSqzm69QIzbhsEKwuy8f09ob/TVjSFQONVW1gNUjWv3WW5s2XkRGKdS2VspWb32VlzeU48v/AGY/8Sn+P/8AR5n7TQ+zy2wtL+0n8zMfrFv6GRFSCvCasFeZLbCYlzOmB6WxS0qNSo3wojMegJjZvnrtPiRXxmIqD7VVwPEJZB6LIoOVybZxirMe9vPePM5n1MWjXFmE2kBiokBdbSU91bLdAsTTIk6gNo19u0R5HjDUyoU7mBI6MVPy9Z0NFKYxHnFezeBz674yj2MViBvErpHKkHq/FzAP0+kdD6wjdfYD0884X6BF44sYvnHUMmA8rT2vGnuMxGmqSrQIo0Gq1FpoM2Nh+s07G1xo3DD4TUYBVAGw23cpGez7Q4pocXUG0dy+5ePX5Wki6a1VsfibBEuKKN9lfvkfeY7Bwtv2cu9TWv8Ajr8ebnPf6qmmdAVqWGXF1KoL1KgV0I7wZgWBDX7xAABFsukg0ZjkwEku0OnmxVTWOSJfUTcL/aI4wEWOYnR45ee3P5LLr09rjZNL0OtsNR/20PmoP1maOBbZNUw9PURE+6ir+VQPpDacmKsEcwytA3ma2wmU72n40JgKi3zcBB+MgfWXEzH/AGx6TPvKdAH4QKh63C/WVn7Zs8dwtrnOIGJJ+FepjAW5ufWEop2C3X9JrAS9VxtsBxA2ecHrKxYKDe/KFsGtnqkdR+sO0E6a9iuZta+0DeBI3eZ6vOflqR3E6Jd6NNadNtZCduqNYNmTt23HrIs6JxANvcVDyRm9QDNZwepYACSlCiDunLPLf46L4M/1j1PsxjGFxQa3iVB8ibzuI0HiaaE1KDqoFy1gQLcSCbTbtQKJQPaDpb4cOh4O/L7C+fe6LxmmPJrWuI1485z1niUmG8RTUzYj+ZQgCctedHHOAFFuHqI6lFuHyheycLQ+MBlqZtnaJoYcawL3KX72rtI8Lx3WnC8LmULpW7ZUyFRaTqij4e5na1t9rSF7TdoTiSiprKq597VzYjLIbgCfPwkJUaILEFT4ZcxkfpInjzL2NL5dWcp6h3gbgBgbHxiwhU5bOETSO3xznjcb5rGY3R9HXrU026zpfle7egM1F5QOxmH18Tr2yRGbq3cH+R8pf2mW77VkHWgbwyrAqkhTYWMwP2nYgNpGoT9hKagcgTfzJm9PMH9q2H1caG++gB/CT+suM1NapnewEcRrZ8flGjxM8DKAtDFo5UgjaMxBA8VryvQ6vOhO09EC1W6Eb9qnkRs5GT6drsMB3XHnn5GZI77B4xFV5hrw5/G082v1s9PTa1PhMyvSuJL1qjn7TsRyBso6KAOki8PjKlM3RyvI5eWyPM984/Fj42l5PJ8pHS8SXnC4iSRNusjgfjOOOEaNolXIi6Dt4kmeZuERrRdBZecU3BHUfX0+UQTOXtmIugTSj7GD0s8wRy4cvCLdvOX+Be+wmF1aL1Dtd7D+1Mv8i/lLGxicDhBSpJTXMIgF+Jtm3U3PWKeZW9XA1WBvC6kEeSbXKkxv2u0O+j8x5zYnlB9oejffUyN4zHMS4zYoxidaEVcI6kgiDsCNoh0Pa09rToM8X8I+hxeJ6TjmJJJnrQ6CCYWhygxE5CXgEKoO0ZgjLZcc4kAWJyNgb5+WXQecZueM8L8YugRUp2AvY6yhgQQfkdu0EboyZNYAYbY5XmT+8IrvgR4ngoY+sn5/6af/AD9fcVy85rSRxGKw5+Ck3MsR8jI5jc5Cw4Zm3Uxy9TZz9e1p684BFhJSSRCqfj5RCU45aVIGqdncX73DU2vchdRv7k7pv5A9YZUlF7FaT93WNInuVdng4GR6i46LL1UmepyqgOoYJUMKqwKoZKmuuZB6bpaykSbaRekdhlRmy3TOixcm0qWNw1jNM0xsMoel9so1fZbR7DAEi4BHjG622dTYeR+Ug4CLZm2y5t5z2tErFSkuqZzWnt04YB3XE6WEROpAOas6BC3Oz/a/6QVYB4CdCzqxUcgJRY8qxFPaef0jyyoHFipydlAqm5Vgy5FSGB4FTcHzE1dKuuiva2sqtbhrAG3rMjO2ajoj/wAWj/tp/iJno8l1TAahhtWA1Jmt/9k=",
          description:
            "TBI’s 5 Best: SF Mocktails to Finish Dry January Strong 5",
          title: "Alina Dron",
          keyword: "Drinks",
        },
        {
          image:
            "data:image/jpeg;base64,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",
          description:
            "PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”",
          title: "Rono Mard",
          keyword: "Phones",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbDPZM4qwyt0xHyRglJuyGMT0OGMStA9vmQ&usqp=CAU",
          description:
            "How to Get Media Mentions for Your Business 5 Best: SF Mocktails",
          title: "Shey Shokew",
          keyword: "Social",
        },
        {
          image:
            "https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg",
          description:
            "The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence",
          title: "Renome Firlin",
          keyword: "Military",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdiJT5rlEebp4iZyvQb4_Vo26n1MjwYxiBjA&usqp=CAU",
          description: "Degrees of Freedom and Sudoko  Artificial Intelligence",
          title: "Helirn Murzil",
          keyword: "Social",
        },
        {
          image:
            "data:image/jpeg;base64,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",
          description: "Degrees of Freedom and Sudoko  Artificial Intelligence",
          title: "Arnuo Fergo",
          keyword: "Social",
        },
      ],
    };
  },
};
</script>
<style scoped>
@media only screen and (max-width: 425px) {
  .minit-title {
    font-size: 30px !important;
  }
}
.p-text {
  font-size: 18px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 40px;
  padding: 15px;
}
.minit-title {
  color: #242020;
  font-size: 50px;
  font-weight: bold;
}
</style>