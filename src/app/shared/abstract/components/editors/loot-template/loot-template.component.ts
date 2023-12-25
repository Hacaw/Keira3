import { LootTemplate } from '@keira-types/loot-template.type';
import { MultiRowEditorComponent } from '../multi-row-editor.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

/* istanbul ignore next */ // TODO: for some reason the next line gives coverage issues...
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export abstract class LootTemplateComponent<T extends LootTemplate> extends MultiRowEditorComponent<T> {}
