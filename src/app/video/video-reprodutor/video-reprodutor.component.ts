import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-video-reprodutor',
	templateUrl: './video-reprodutor.component.html',
	styleUrls: ['./video-reprodutor.component.scss']
})
export class VideoReprodutorComponent implements OnInit {

	link: string;
	
	constructor() { }

	ngOnInit() {
		console.log(this.link);

	}

}
