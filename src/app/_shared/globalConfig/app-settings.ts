import { HttpHeaders } from '@angular/common/http';

export class AppSettings {
    public static httpOptions = {
                                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
                                };

    public static API_URL='http://localhost:3000';
    public static POSTS=`${AppSettings.API_URL}/posts/`;
    
}
