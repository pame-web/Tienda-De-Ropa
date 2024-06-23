import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categoriasUrl = 'https://www.hostcatedral.com/api/appNoti/public/getCategoriasProductos';
  private productosUrl = 'https://www.hostcatedral.com/api/appNoti/public/getProductosPorCategoriaID/';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.categoriasUrl).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error al obtener las categorías:', error);
        return throwError('Error en la solicitud HTTP');
      })
    );
  }

  getProductosPorCategoriaID(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.productosUrl}${id}`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error al obtener los productos por categoría:', error);
        return throwError('Error en la solicitud HTTP');
      })
    );
  }
}
