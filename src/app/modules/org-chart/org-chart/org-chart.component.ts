import { Component, Input } from '@angular/core';
import { OrgData } from '../orgData';

@Component({
	selector: 'angular-org-chart',
	templateUrl: './org-chart.component.html',
	styleUrls: ['./org-chart.component.scss', '../org-chart-combined.scss']
})
export class OrgChartComponent {
	@Input() data: OrgData;
	@Input() hasParent = false;
	hideChild = false;

	ngOnInit() {
		if (this.data) {
			this.hideChild = this.data.collapsed;
		} else {
			this.hideChild = false;
		}
	}

	ngChanges(changes: any) {
		if (changes.data && changes.data != null) {
			this.hideChild = changes.collapsed;
		}
	}

	toggleShowChild(value) {
		this.hideChild = !this.hideChild;
	}
}
