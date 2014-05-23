﻿/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

'use strict';

CKEDITOR.dialog.add( 'mathjax_wiris', function( editor ) {

	var wiris_editor,
		lang = editor.lang.mathjax;
	return {
		title: lang.title,
		minWidth: 800,
		minHeight: 350,
		contents: [
			{
				id: 'info',
				elements: [
					{
						id: 'preview',
						type: 'html',
						height: '800px',
						html:
							'<div style="width:100%;height:350px;text-align:center;">' +
								'<iframe style="border:0;width:100%;height:100%;" scrolling="no" frameborder="0" allowTransparency="true"></iframe>' +
							'</div>',

						onLoad: function( widget ) {
							var iFrame = CKEDITOR.document.getById( this.domId ).getChild( 0 );
							var wiris_editor = new CKEDITOR.plugins.mathjax.frameWiris( iFrame, editor );
							
						},

						setup: function( widget ) {
							//preview.setValue( widget.data.math );
						},

						commit: function( widget ) {
							widget.setData( 'math',  CKEDITOR.wiris_editor.getMathML() );
						}
					}
				]
			}
		]
	};
} );
