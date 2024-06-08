import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { injectQuery } from "@tanstack/angular-query-experimental";
import { lastValueFrom } from "rxjs";

type Response = {
    name: string;
    description: string;
    subscribers_count: string;
    stargazers_count: string;
    forks_count: string;
}

@Component({
    standalone: true,
    selector: 'app-tanstack',
    templateUrl: './tanstack.component.html'
})
export class TanStackComponent {
    http = inject(HttpClient)

    query = injectQuery(() => ({
        queryKey: ['repoData'],
        queryFn: () =>
        lastValueFrom(
            this.http.get<Response>('https://api.github.com/repos/tanstack/query'),
        ),
    }))
}
