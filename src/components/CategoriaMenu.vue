<template>
    <div class="category-menu">
        <ul>
            <li
                v-for="categoria in categoriaLista" :key="categoria.id"
                @click="onCategoriaClick(categoria.id)"
                :class="{ active: ehAtivo(categoria.id)}">

                <component :is="categoria.icon" />
                <p>{{ categoria.label }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import Pizza from "../assets/icons/pizza.svg";
import Combo from "../assets/icons/french-fries.svg";
import Deserts from "../assets/icons/ice-cream.svg";
import Drinks from "../assets/icons/smothie.svg";
import Burguer from "../assets/icons/food.svg";

export default {
    name: 'CategoriaMenu',
    components: {
        Pizza,
        Combo,
        Deserts,
        Drinks,
        Burguer,
    },
    data() {
        return {
            categoriaLista: [
                {
                    label: "Pizza", icon: "Pizza", id: "pizza"
                },
                {
                    label: "Bebidas", icon: "Drinks", id: "drinks"
                },
                {
                    label: "Doces", icon: "Deserts", id: "deserts"
                },
                {
                    label: "Combos", icon: "Combo", id: "combo"
                },
                {
                    label: "Burguers", icon: "Burguer", id: "burguers"
                }
            ],
            selecionadaCategoria: ""
        }
    },
    mounted() {
        this.onCategoriaClick('pizza')
    },
    methods: {
        onCategoriaClick(id) {
            this.selecionadaCategoria = id 
            this.$store.dispatch('alterarCategoria', id)
        },
        ehAtivo(id) {
            return this.selecionadaCategoria === id 
        }
    }
}
</script>

<style lang="less" scoped>
.category-menu {
  width: 130px;
  min-width: 130px;
  height: 100vh;
  background: white;

  display: flex;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    width: 100%;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100px;

      p {
        margin-bottom: 0px;
        font-weight: 500;
        font-size: 14px;
        color: #A9A9A9; // alterado
      }
      svg {
        path {
          fill: #A9A9A9; // alterado
        }
      }

      &.active {
        background: #FFFF00;
        border-radius: 8px;

        p {
          color: black;
        }

        svg {
          path {
            fill: black;
          }
        }
      }
    }
  }

  @media tablets {
      width: 100%;
      height: fit-content;

      ul{
          display: flex;
          margin: 20px;
          overflow: scroll;
          justify-content: center;

          li{
             min-width: 78px; 
          }
      }
  }
}
</style>