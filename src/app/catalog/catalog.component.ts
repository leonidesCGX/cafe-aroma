import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

  currentPage = 1;
  totalPages = 2;
  productsPerPage = 6;
  totalProducts = 12;
  selectedCategory = 'Todos los productos';

  page1Products: Product[] = [
    {
      id: 1,
      name: 'Café Latte',
      description: 'Espresso suave con leche vaporizada y una delicada capa de espuma.',
      price: 4.50,
      imageUrl: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=400&fit=crop',
      category: 'Cafés'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso perfecto cubierto con espuma de leche cremosa y esponjosa.',
      price: 4.25,
      imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop',
      category: 'Cafés'
    },
    {
      id: 3,
      name: 'Té Chai',
      description: 'Mezcla aromática de especias con leche cremosa, una experiencia reconfortante.',
      price: 3.75,
      imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
      category: 'Tés'
    },
    {
      id: 4,
      name: 'Croissant',
      description: 'Croissant francés recién horneado, dorado y crujiente por fuera, suave por dentro.',
      price: 2.50,
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
      category: 'Panadería'
    },
    {
      id: 5,
      name: 'Americano',
      description: 'Espresso puro diluido con agua caliente para un sabor intenso y limpio.',
      price: 3.25,
      imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
      category: 'Cafés'
    },
    {
      id: 6,
      name: 'Muffin de Arándanos',
      description: 'Muffin esponjoso cargado de arándanos frescos y un toque de vainilla.',
      price: 3.00,
      imageUrl: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop',
      category: 'Panadería'
    }
  ];

  page2Products: Product[] = [
    {
      id: 7,
      name: 'Espresso',
      description: 'Shot puro de café espresso, intenso y aromático, base de todas nuestras bebidas.',
      price: 2.75,
      imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop',
      category: 'Cafés'
    },
    {
      id: 8,
      name: 'Té Verde Matcha',
      description: 'Polvo de matcha premium batido tradicionalmente, rico en antioxidantes.',
      price: 4.00,
      imageUrl: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop',
      category: 'Tés'
    },
    {
      id: 9,
      name: 'Bagel con Salmón',
      description: 'Bagel artesanal tostado con salmón ahumado, queso crema y eneldo fresco.',
      price: 6.50,
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
      category: 'Panadería'
    },
    {
      id: 10,
      name: 'Mocha',
      description: 'Espresso con chocolate caliente y leche vaporizada, coronado con crema batida.',
      price: 4.75,
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      category: 'Cafés'
    },
    {
      id: 11,
      name: 'Té Earl Grey',
      description: 'Té negro clásico con esencia de bergamota, elegante y refinado.',
      price: 3.50,
      imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
      category: 'Tés'
    },
    {
      id: 12,
      name: 'Cheesecake',
      description: 'Delicioso cheesecake cremoso con base de galleta, cubierto con frutos rojos.',
      price: 4.25,
      imageUrl: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=400&fit=crop',
      category: 'Postres'
    }
  ];

  constructor(private router: Router) {}

  get currentProducts(): Product[] {
    let allFilteredProducts = this.filteredProducts;
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    return allFilteredProducts.slice(startIndex, endIndex);
  }

  get allProducts(): Product[] {
    return [...this.page1Products, ...this.page2Products];
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'Todos los productos') {
      return this.allProducts;
    }
    return this.allProducts.filter(product => product.category === this.selectedCategory);
  }

  onFilterByCategory(category: string) {
    console.log('Filtrar por categoría:', category);
    console.log('Productos antes del filtro:', this.allProducts.length);
    this.selectedCategory = category;
    this.currentPage = 1;

    const filtered = this.filteredProducts;
    console.log('Productos después del filtro:', filtered.length);
    console.log('Productos filtrados:', filtered.map(p => ({ name: p.name, category: p.category })));
  }

  isCategoryActive(category: string): boolean {
    return this.selectedCategory === category;
  }

  onAddToCart(product: Product) {
    console.log('Agregar al carrito:', product);
  }

  onPageChange(page: number) {
    console.log('Cambiar a página:', page);
    this.currentPage = page;
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalFilteredPages) {
      this.currentPage++;
    }
  }

  get startProduct() {
    const start = (this.currentPage - 1) * this.productsPerPage + 1;
    return Math.min(start, this.filteredProducts.length);
  }

  get endProduct() {
    const end = Math.min(this.currentPage * this.productsPerPage, this.filteredProducts.length);
    return Math.max(end, 1);
  }

  get totalFilteredProducts() {
    return this.filteredProducts.length;
  }

  get totalFilteredPages() {
    return Math.ceil(this.totalFilteredProducts / this.productsPerPage);
  }

  isPageActive(page: number): boolean {
    return page === this.currentPage;
  }

  canGoPrevious(): boolean {
    return this.currentPage > 1;
  }

  canGoNext(): boolean {
    return this.currentPage < this.totalFilteredPages;
  }
}
