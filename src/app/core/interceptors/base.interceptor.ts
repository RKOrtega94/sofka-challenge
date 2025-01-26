import type { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const baseInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({ url: `${environment.BASE_URL}/${req.url}` });
  return next(req);
};
