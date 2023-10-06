import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import Nav from "../home-components/Nav.vue";
it("renders navigation links correctly", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", name: "Home" },
      { path: "/products", name: "Products" },
      { path: "/checkout", name: "Checkout" },
    ],
  });
  const wrapper = mount(Nav, {
    global: {
      plugins: [router],
    },
  });
  const navLinks = wrapper.findAll(".nav-link");

  expect(navLinks.length).toBe(3);
  expect(navLinks[0].text()).toBe("Home");
  expect(navLinks[1].text()).toBe("Products");
  expect(navLinks[2].text()).toBe("Checkout");
});
