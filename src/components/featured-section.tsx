"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FeaturedSection() {
  const [colors, setColors] = useState<string[]>([
    "#3B82F6", // Blue
    "#10B981", // Green
    "#6366F1", // Indigo
    "#F59E0B", // Yellow
    "#EF4444", // Red
  ]);
  const [activeColor, setActiveColor] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  
  // Generate a random color in hex format
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  };

  // Add a new random color to the palette
  const addColor = () => {
    if (colors.length < 8) {
      setColors([...colors, generateRandomColor()]);
    }
  };

  // Remove a color from the palette
  const removeColor = (index: number) => {
    if (colors.length > 3) {
      const newColors = [...colors];
      newColors.splice(index, 1);
      setColors(newColors);
      
      // Make sure activeColor is always valid after deletion
      if (activeColor >= newColors.length) {
        setActiveColor(Math.max(0, newColors.length - 1));
      }
    }
  };

  // Update a specific color
  const updateColor = (index: number, newColor: string) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  // Copy the current palette as CSS variables
  const copyPalette = () => {
    const cssVars = colors
      .map((color, index) => `  --color-${index + 1}: ${color};`)
      .join("\n");
    
    const cssCode = `:root {\n${cssVars}\n}`;
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Ensure we have a valid active color index
  const safeActiveColorIndex = Math.min(activeColor, colors.length - 1);
  const currentColor = colors[safeActiveColorIndex] || "#000000";

  return (
    <section className="py-16 px-4 bg-background" id="featured">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Interactive Demo</h2>
        
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Color Palette Generator</CardTitle>
            <CardDescription>
              Create your own color palette by adding, removing, and adjusting colors.
              This demo showcases interactive component design and state management.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              {/* Color preview */}
              <div 
                className="h-32 rounded-md transition-colors duration-300 flex items-end p-4"
                style={{ backgroundColor: currentColor }}
              >
                <span className="bg-background/90 text-foreground px-3 py-1 rounded text-sm backdrop-blur-sm">
                  {currentColor.toUpperCase()}
                </span>
              </div>
              
              {/* Color selection strip */}
              <div className="flex gap-2 flex-wrap">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`h-12 w-12 rounded-md cursor-pointer transition-all duration-200 hover:scale-105 ${
                      index === safeActiveColorIndex ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setActiveColor(index)}
                  >
                    {colors.length > 3 && (
                      <button
                        className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground h-5 w-5 rounded-full opacity-0 hover:opacity-100 flex items-center justify-center text-xs transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeColor(index);
                        }}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                
                {colors.length < 8 && (
                  <button
                    className="h-12 w-12 rounded-md border-2 border-dashed border-muted-foreground/50 flex items-center justify-center hover:border-primary/50 transition-colors"
                    onClick={addColor}
                  >
                    +
                  </button>
                )}
              </div>
              
              {/* Color picker */}
              <div className="space-y-2">
                <label htmlFor="colorPicker" className="block text-sm text-muted-foreground">
                  Adjust selected color:
                </label>
                <input
                  type="color"
                  id="colorPicker"
                  value={currentColor}
                  onChange={(e) => updateColor(safeActiveColorIndex, e.target.value)}
                  className="w-full h-10 rounded-md cursor-pointer"
                />
              </div>
            </div>
          </CardContent>
          
          <CardFooter>
            <Button 
              variant="outline" 
              className="mr-2"
              onClick={() => setColors([
                "#3B82F6", "#10B981", "#6366F1", "#F59E0B", "#EF4444"
              ])}
            >
              Reset
            </Button>
            <Button className="relative" onClick={copyPalette}>
              {copied ? "Copied!" : "Export as CSS Variables"}
              {copied && (
                <span className="absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground animate-pulse">
                  Copied!
                </span>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}