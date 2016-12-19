import { Component, OnInit } from '@angular/core';

import { CrisisCenter } from './shared/crisis-center.model';
import { CrisisCenterService } from './shared/crisis-center.service';

@Component({
	selector: 'crisis-center',
	templateUrl: 'crisis-center.component.html',
	providers: [CrisisCenterService]
})

export class CrisisCenterComponent implements OnInit {
	crisisCenter: CrisisCenter[] = [];

	constructor(private crisisCenterService: CrisisCenterService) { }

	ngOnInit() {
		this.crisisCenterService.getList().subscribe((res) => {
			this.crisisCenter = res;
		});
	}
}