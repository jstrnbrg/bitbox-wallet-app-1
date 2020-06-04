/**
 * Copyright 2020 Shift Devices AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, h } from 'preact';
import { Header } from '../../components/layout';


class Guides extends Component   {

  private url = "https://guides.shiftcrypto.ch" + this.props.path;

    public render(
        {}) {
        return (
          <div className="contentWithGuide">
              <div className="container">
              <Header title={<h2></h2>}>
              </Header>
            <iframe style="overflow: hidden; height: 100%;
        width: 100%; position: relative; border: none" src={this.url}></iframe>
            </div>
          </div>
        );
    }
}


export { Guides };
