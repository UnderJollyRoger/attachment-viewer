/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import {
  subclass,
  declared,
  property
} from "esri/core/accessorSupport/decorators";
import Widget = require("esri/widgets/Widget");

import { ApplicationConfig } from "ApplicationBase/interfaces";
import { renderable, tsx } from "esri/widgets/support/widget";

// nls
import * as i18n from "dojo/i18n!../PhotoCentric/nls/resources";

const CSS = {
  title: "title-container",
  onboardingHeadingText: "esri-photo-centric__onboarding-heading-text",
  headingContainer: "esri-photo-centric__heading-container",
  onboardingContent: "esri-photo-centric__onboarding-content",
  onboardingContentContainer: "esri-photo-centric__onboarding--custom-disabled"
};

@subclass("OnboardingContent")
class OnboardingContent extends declared(Widget) {
  constructor(params) {
    super(params);
  }
  @property()
  @renderable()
  config: ApplicationConfig;

  render() {
    const {
      customOnboardingHTML,
      customOnboardingContentEnabled
    } = this.config;
    const onboardingContainer = {
      [CSS.onboardingContentContainer]: !customOnboardingContentEnabled
    };
    return (
      <div
        class={this.classes(onboardingContainer)}
        innerHTML={
          customOnboardingContentEnabled
            ? customOnboardingHTML
              ? customOnboardingHTML
              : null
            : null
        }
      >
        {customOnboardingContentEnabled ? null : (
          <div>
            <div class={CSS.headingContainer}>
              <h2 class={CSS.onboardingHeadingText}>{i18n.welcome}</h2>
            </div>
            <h4>{i18n.subtitle}</h4>
            <h6>{i18n.instructionHeading}</h6>
            <ul>
              <li>{i18n.stepOne}</li>
              <li>{i18n.stepTwo}</li>
              <li>{i18n.stepThree}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export = OnboardingContent;
