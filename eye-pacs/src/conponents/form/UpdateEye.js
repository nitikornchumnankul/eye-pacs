import React, { Component } from 'react'

export default class UpdateEye extends Component {
    render() {
        return (
            <div>

                <table class="bg-white table-auto border-separate w-full">
                    {/* -----------------------------------------HEADER------------------------------------------------------------- */}
                    <thead>
                        <tr>
                            <th class="p-2 w-1/2">EyePACS GRADING GUIDELINES</th>
                            <th class="p-2">YES</th>
                            <th class="p-2">Cannot Grade</th>
                        </tr>
                    </thead>
                    {/* ------------------------------------------BODY------------------------------------------------------------ */}
                    <tbody>
    
                        <tr>
                            <th class="p-2 w-1/2">No apparent diabetic retionpathy</th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>


                        <tr>
                            <th class="p-2 w-1/2"> Microaneurysms ONLY (MA)</th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>


                        <tr>
                            <th class="p-2 w-1/2"> Cotton wool spts (CW)</th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>


                        <tr>
                            <th class="p-2 w-1/2">Hemorrhages with or without MA (HMA) 2a</th>
                            <th><input type="checkbox"></input>2a<input type="checkbox"></input>2a</th>
                            <th><input type="checkbox"></input></th>
                        </tr>


                        <tr>
                            <th class="p-2 w-1/2">Difinite Venous Beading 6a</th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>


                        <tr>
                            <th class="p-2 w-1/2">Intraretinal microvascular abnormalities (IRMA) 8a</th>
                            <th><input type="checkbox"></input>8a<input type="checkbox"></input>8a</th>
                            <th><input type="checkbox"></input></th>
                        </tr>

                        <tr >
                            <th class="p-2 w-1/2">New vessels (NV) or Fibrous Proliferation (FP)</th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>

                        <tr>
                            <th class="p-2 w-1/2">Preretinal (PRH) or vitreous (VH) hemorrhage</th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>


                        <tr>
                            <th class="p-2 w-1/2">Panretinal laser scars present</th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>

                        <tr>
                            <th class="p-2 w-1/2">Focal laser scars present</th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>

                        <tr>
                            <th class="p-2 w-1/2">Hard exudates (HE) present anywhere</th>
                            <th><input type="checkbox"></input></th>
                            <th><input type="checkbox"></input></th>
                        </tr>

                        <tr>
                            <th class="p-2 w-1/2"> HE close to center of macula</th>
                            <th><input type="checkbox"></input>2DD<input type="checkbox"></input>1DD</th>
                            <th><input type="checkbox"></input></th>
                        </tr>
                    </tbody>
                    {/* ------------------------------------------------------------------------------------------------------ */}


                </table>
            </div>
        )
    }
}
